
# Mapna CTF 2024 - Writeup

[CTFTime page](https://ctftime.org/event/2205)

[MapnaCTF 2024 Website](https://mapnactf.com/)

## Flag Holding

---

### Challenge

> Hopefully you know how web works...

Attachment: `http://18.184.219.56:8080/`

### Solution

When we go to the attached website, we get a message in the front page:

> You are not coming from "http://flagland.internal/".

So, it seems like this is a classic HTTP header challenge. We put `Referer` header and put the given URL as its value (you can intercept the traffic and put custom headers by using either Burp Suite or ZAP). We get the following message:

> Unspecified "secret".

This part was a bit time consuming because there is not much clue given. After checking a lot of headers, I realized that it might not be about headers. It was about URL parameters. So with the following URL, we get this message (`http://18.184.219.56:8080/?secret=asdf`):

> Incorrect secret.

If we check the source code of the new page, we can see what the secret is about. (`http://18.184.219.56:8080/?secret=http`) and the new page has the following message:

> Sorry we don't have "GET" here but we might have other things like "FLAG".

And if we send a "FLAG" request instead of GET, we get the flag:

### MAPNA{533m5-l1k3-y0u-kn0w-h77p-1836a2f}

## PLC I

---

### Challenge

> The MAPNA CERT team has identified an intrusion into the plant's PLCs, discovering a covert message transferred to the PLC. Can you uncover this secret message?

Attachment: A pcap file

### Solution

The attachment had 51 TCP packets with unreadable data. At first sight, there was nothing to see in these packets. But, if looked closely, the packets which has only ACK flag had extra bits of information in their ethernet packets. If you check all only-ACK packets and write these bits of information down, you get the following things:

```sh
    1:MAPNA{y
	2:0U_sHOu
	3:Ld_4lW4
	4:yS__CaR
	5:3__PaAD
	6:d1n9!!}
```

This is clearly our flag!

### MAPNA{y0U_sHOuLd_4lW4yS__CaR3__PaADd1n9!!}

## Novel reader

---

### Challenge

> We have many fun novels for ya...

Attachment: The docker environment, and the following URL: `http://3.64.250.135:9000`

![Novel reader](/CTF/Mapna_CTF/novel-reader.JPG)

### Solution

If we investigate the given environment and the source code, we can see this bit of code, which makes sure that we only reach public novels:

```python
    if(not name.startswith('public/')):
        return {'success': False, 'msg': 'You can only read public novels!'}, 400
```

But of course, this does not work as intended. We can reach and read any file we want. First, I tried to put "../" but it didn't work. Then, tried double encoding that and put the following payload:

> /api/read/public/%252e%252e/%252e%252e/flag.txt

### MAPNA{uhhh-1-7h1nk-1-f0r607-70-ch3ck-cr3d17>0-4b331d4b}

## Novel reader 2

---

### Challenge

> Submit the second flag of "Novel Reader" here

### Solution

In the word balance part, we can set the balance to -1, which makes the server provide us all content except last word. The rest of the solution is almost the same as before, with a different path:

> /api/read/public/%252e%252e/private/A-Secret-Tale.txt

### MAPNA{uhhh-y0u-607-m3-4641n-3f4b38571}
