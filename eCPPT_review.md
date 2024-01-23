<center>

![eCPPT logo](/eCPPTv2.png)
</center>

# eCPPT Review 2024

Before getting into anything, I want to put a disclaimer that I took this course and exam in the winter of 2023-2024. Course material and the exam structure may have been changed since then. But the general concept, required knowledge and expected level of study should be more or less the same.

## My background before eCPPT

---

First of all, I want to give you my background before I started to study for eCPPT, so that you can compare with yourself. I have BSc Computer Science degree with experience of personal projects about software development and coding. So I am good at writing and understanding programming languages. I had a good knowledge of C++, Javascript, HTML-CSS, Python, SQL, and some knowledge of Java and bash. I had also experience with Windows and Unix environments.

Other than that, I always love solving machines from **TryHackMe (THM)** and **HackTheBox (HTB)**. I had a quite experience in those sites as well (I will give more suggestions for specific machines later on). Moreover, a couple of months before studying for eCPPT, I obtained my eJPT certificate. So my hacking practical knowledge was also fresh.

## How and What I studied

---

### PTP

I studied PTP (official eCPPT course on INE) for 2 months and finished all the material given in the course. Some days I studied for 1-2 hours, some days for 6-7 hours. On average, we can say I studied around 2-3 hours per day. The course has some overlapped/repeated content with the eJPT course so I passed some parts quickly and it was easy to understand.

The course is very big and comprehensive. It includes almost all aspects of hacking: information gathering, scanning, enumeration, MitM attacks, exploitation (including web and buffer overflows), post exploitation (including enumeration, privilege escalation, pivoting, and cleaning-up). It has content for both Windows and Linux operating systems. The only important thing that is missing in eCPPT is Active Directory (AD). Neither the course nor the exam has AD.

I suggest starting from **Network Security**. You should come back to **System Security** at the end as it is the hardest part to digest and understand, which includes **buffer overflows**. Go down the list from Network Security as in the given order and return to System Security at the end. I skipped **Wi-fi Security** as it was not directly needed for the exam. You can also skip if you have a tight schedule and you just want to get the certificate as soon as possible. Although it is not included in the exam, the content is very valuable to know in general. I suggest returning to it after the exam.

The material given in the course is more than enough to pass the exam. There are no bigger expectation in the exam, whatever is in the exam is included in the course. However, it is always nice to study a bit more with extra materials to ensure of the outcome and to gain a confidence in the exam.

### Extra Materials

THM, HTB and Youtube has great content to study for eCPPT. I will list a couple of ones that comes to my mind here:

- **THM - Wreath**

This room is highly suggested for pivoting. It is also free if you have 7 days of streak. You will need to double pivot during the exam which is not easy to do. This room helps greatly to practice and learn pivoting.

- **THM - Buffer overflow prep**

This room is the reason why I was successful with the buffer overflow in the exam. It is great in terms of teaching buffer overflows and understanding how they work. It is better than PTP BO content in my opinion.

- **THM - Gatekeeper**

I think the above room is enough for the exam but if you still have concerns, Gatekeeper is a great room to practice further.

- **THM - Individual CTF rooms**

There are a lot of CTF rooms on THM most of which are also free. They help a lot in terms of learning how things work, and very good for practice. The following is a great collection of free rooms on THM which is also regularly updated: [https://github.com/winterrdog/tryhackme-free-rooms](https://github.com/winterrdog/tryhackme-free-rooms)

- **HTB Boxes**

There are also very good machines on HTB to practice. I suggest not to go for higher difficulty than Medium. Because Hard and Insane boxes on HTB are unnecessarily hard for eCPPT.

- **Youtube videos**

One of the best ways to learn is to watch someone do. I will not give a specific source here but there are great contents if you search related to eCPPT.

## Exam

---

You can take your exam whenever you want (whichever day, whichever hour you want) and you do not to take an appointment for it. It is online and open-book exam (and not monitored in anyway), meaning you can use whatever resource you want during the exam, including your own notes and internet (this is why it is so important to take detailed and individualized notes while studying). You are given 7 days of environment access and an extra 7 days to write a report. I suggest finishing your report in the first 7 days as it is possible to go back to the environment and take missing screenshots when needed.

My exam story went like this: I gained initial foothold and enumerated a bit at the end of the first day. On the second and third day, I further exploited the machines and gained access to the inside network. On the fourth and fifth day, I did the buffer overflow and gained root user on DMZ (which is the last step). On the sixth and seventh day, I wrote my report which had 34 pages (I heard the report usually supposed to be 30-60 pages). Be sure that you included everything you found and wrote detailed PoCs for them to replicate the steps. They give high importance to the PoC of the buffer overflow, so make sure you included detailed screenshots.

If you feel stuck or overwhelmed, take breaks and come back with a refreshed mind. Sleep well between days. You can stop the environment and start the next day, it won't be reset and if you have a persistence mechanism, it won't be deleted. Resetting is done with a different button.

You also have a free retake if you fail to pass in the first attempt.

## Final thoughts and suggestions

---

Firstly, if you haven't already taken eJPT, do it before eCPPT. It is a great certificate and it has a very good course.

eCPPT is great in terms of gaining experience, learning in-depth exploitation. Writing a comprehensive, commercial-grade report is one of the best aspects of eCPPT. It helps you to learn how a real-world pentest report is created. Although the content of eCPPT is a bit old, it is still a great experience and it makes you realize how easy eJPT was. It is also a very good practice if you aim to go for OSCP. I suggest the following path if you are interested in certificates: **eJPT -> eCPPT -> CPTS/OSCP**

Last but not the least, a couple more suggestions:

- While studying for eCPPT, create a cheatsheet where you write every important part of what you learn. I used GoogleDocs for it but any note-taking app should be fine.
- During the exam, take detailed notes, IPs, exploitation methods, how you exploited, payloads, vulnerabilities, links of resources, enumerated information, found valuable information, persistence methods etc. I used Xmind and I suggest using it or any other mind-mapping tool to take notes.
- During the exam, take unnecessary amount of screenshots of what you did. You don't have to use all of them in your report, but if you have missing screenshots, it is hard to go back and pivot again and again just to take one screenshot (talking from experience :) ).
- Use a template for your report. I suggest using TCM Pentesting report template.
- Do not worry to fail. You have a free retake!



