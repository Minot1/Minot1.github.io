
# Iris CTF 2024

[CTFTime page](https://ctftime.org/event/2085)

[Iris CTF 2024 Website](https://2024.irisc.tf/home)

### Table of Contents

1. [OSINT / Czech Where?](#osint--czech-where)
2. [OSINT / Away on Vacation](#osint--away-on-vacation)
3. [OSINT / Personal Breach](#osint--personal-breach)
4. [WEB / What's My Password?](#web--whats-my-password)
5. [RE / The Johnson's](#re--the-johnsons)

## OSINT / Czech Where? <a name="osint--czech-where"></a>

### Challenge

> Iris visited this cool shop a while back, but forgot where it was! What street is it on?
> 
> Hint! FYI: flag is all lowercase and _ for spaces. Please remove all accent marks if there are any. Wrap your answer in irisctf{}.

Attachment: A png file

### Solution

To find a place from a picture, the go-to place is Google image search. When we search it, we find a very similar picture in a Japanese blog post:

http://tabiichigo.livedoor.biz/archives/51921024.html

The post contains crucial information to find this place:

"lanes inside Prague Castle"\
"The back of the main St. Vitus Church and St. George Church"

We understand that this picture must have been taken either inside Prague Castle or near it. I also located St. Vitus Church and St. George Church on the map so that it becomes easier to understand the location. Using Google Street, I moved around Prague Castle a bit. After some time, I realized the numbering above doors. The numbers were in order so it was easy to go to number 20 after finding number 13:

### irisctf{zlata_ulicka_u_daliborky}

## OSINT / Away on Vacation <a name="osint--away-on-vacation"></a>

### Challenge

> Iris and her assistant are away on vacation. She left an audio message explaining how to get in touch with her assistant. See what you can learn about the assistant.

Attachment: a sound file which has the transcript:

> Hello, you’ve reached Iris Stein, head of the HR department! I’m currently away on vacation, please contact my assistant Michel. You can reach out to him at michelangelocorning0490@gmail.com. Have a good day and take care.

### Solution

First, I checked LinkedIn since the challenge mentioned about their work and Iris works as the head of the HR department. I found two LinkedIn accounts:\
https://www.linkedin.com/in/iris-stein-57894b2a7/ \
https://www.linkedin.com/in/michelangelo-corning-6b1b7a2a4/

However, there wasn't so much interesting in these two accounts. So, I looked for other social media sites. After a couple tries, Instagram gave good results. Michel had the flag in one of his posts:

https://www.instagram.com/michelangelo_corning/

### irisctf{pub1ic_4cc0unt5_4r3_51tt1ng_duck5}

## OSINT / Personal Breach <a name="osint--personal-breach"></a>

### Challenge

> Security questions can be solved by reconnaissance. The weakest link in security could be the people around you.

Attachment: https://personal-breach-web.chal.irisc.tf/

The website above has three questions:

- How old is Iris?
- What hospital was Iris born in?
- What company does Iris work for?

### Solution

We need to find the answer to three questions above to obtain the flag. We know the answer to the third question by the LinkedIn account of Iris Stein found above:

#### Mountain Peak Hiring Agency

But we need to find the other two answers. From the above Instagram account, Michel follows two accounts, one of them stands out:

https://www.instagram.com/irisstein_station/

In one of her posts, she mentions her mother and gives an account name without giving a social media name: @/ElainaStein\
https://www.instagram.com/p/C1qwh0Cuj5P/

After checking a couple of social media sites with the given name, I found a Facebook account:\
https://www.facebook.com/profile.php?id=61555040318052

This account gives Iris' birthday and a picture with some hospital comments. We can calculate the age from the birthday:

#### 27

The post about the hospital gives a clue:

> To think they got ranked to be the best maternity hospital in Manhattan is astounding. They even renovated the rooms

After a short research on Google about "best maternity hospital in Manhattan", a lot of websites gives the same name:

#### Lenox Hill Hospital

When we enter these three information to the attached website, we get the flag:

### irisctf{s0c1al_m3d1a_1s_an_1nf3cti0n}

## WEB / What's My Password? <a name="web--whats-my-password"></a>

### Challenge

> [baby] Oh no! Skat forgot their password (again)!

Attachment: https://whats-my-password-web.chal.irisc.tf\
And the source code of the website.

### Solution

On the given website, we see a login page. At first, I tried some random inputs and default credentials to understand how the website responds. It was the usual "Wrong combination" error and there weren't any apparent user enumeration vulnerability.

Then I tried some SQL injection methods. I entered:

> " OR ""="

on both username and password, which gave a different error:

> Username can only contain lowercase letters and numbers.

Username seemed like it had some level of SQLi protection. However, when we give a random username and `" OR ""="` as password, we get:

> Logged in!

But nothing else happens. So I decided to check the requests and responses. When we check the response with the `Logged in!` message, we can see an interesting response:

> {"username":"root","password":"IamAvEryC0olRootUsr"}

I tried the password as a flag but it didn't work. So, I decided to analyse the given source code. The source code had the database initialization code which had the usernames hard-coded in it.

> CREATE TABLE IF NOT EXISTS users ( username text, password text );\
> INSERT INTO users ( username, password ) VALUES ( "root", "IamAvEryC0olRootUsr");\
> INSERT INTO users ( username, password ) VALUES ( "skat", "fakeflg{fake_flag}");\
> INSERT INTO users ( username, password ) VALUES ( "coded", "ilovegolang42");

It is now obvious that we need the password of `skat`. However, whatever I tried, I got the password of the root user. After further inspection of the source code, I realized that the server sends the first found result. Since we had `" OR ""="` as password, every user is a possible result. But we want not the first one but the second result from the database. So, we need to upgrade our SQLi.

After some research and trying a couple of SQLi commands, I edited and arranged a command that works:

> " OR 1=1 LIMIT 1 OFFSET 1 -- -

which gave the flag:

### irisctf{my_p422W0RD_1S_SQl1}

## RE / The Johnson's <a name="re--the-johnsons"></a>

### Challenge

> Please socialize with the Johnson's and get off your phone. You might be quizzed on it!

Attachment: An elf executable and a command: `nc babyrevjohnson.chal.irisc.tf 10002`

### Solution

Before any reversing, I like to run the executable to see what it is. It asks for favorite colors and foods for some people. If we `strings` it, we can see the colors and foods that are being expected:

> blue, green, yellow\
> pizza, pasta, steak, chicken

However, after playing around a bit, I realized one color was missing because it asks for 4 different colors. I tried some and realized it is `red` and the reason why it didn't show up on `strings` was because it is 3 characters. When we enter these colors and foods, we get: `Incorrect`. There must be an order to enter.

Time to reverse and open Ghidra! After the auto-analysis, I tried to understand the main function and the function called `check`. Here are my findings from reading the code:
- Colors and foods are given numbers, encoded in a manner, in the following way:
  > red			1\
	> blue		2\
	> 	green		3\
		yellow	4\
        pizza			1\
		pasta			2\
		steak			3\
		chicken			4
- `check` function puts some logical limits for the results to be true:
    > First color is not green\
    Second color is not red, nor green\
    Third color is not yellow\
    Forth color is blue

    > First food is chicken\
    No clue about second food\
    Third food is not pasta\
    Forth food is not steak, nor pasta

So this is a simple logic puzzle. When you solve it and find the correct order, you get the flag:

### irisctf{m0r3_th4n_0n3_l0g1c_puzzl3_h3r3}


