# Client-side XSS Protection

> [!NOTE]
> All steps shown are for educational purposes only.

## Link to Video (German):
[Watch the Video to this Challenge](https://www.loom.com/share/45cb84e24305483f9a73b747ba4573a3?sid=22f94e09-cbb1-4648-8b38-00d9115138d6)

## Table of Contents

1. [Challenge Introduction](#challenge-introduction)
2. [Hints](#hints)
3. [What do you need](#what-do-you-need-to-solve)
4. [Solution](#solution)
5. [Summary](#summary)
6. [Risks of XSS](#risks-of-xss)



## Challenge Introduction

**Difficulty**
- 3-Star-Challenge

**Category**
- Persistend Client-Side XSS

**Description**
- Perform a persisted XSS attack with `<iframe src="javascript:alert(´xss´)">` bypassing a client-side security mechanism.

### Hints

<ins>OWASP</ins> 
- Only some input fields validate their input. Even less of these are persisted in a way where their content is shown on another screen.
  
<ins>Developer Academy</ins>
- Select a suitable source and sink. Take a close look at the administration section and think about what could have triggered the message.

### What do you Need to Solve

- ***OWASP Juice Shop***
  - Registration Page `http://127.0.0.1:3000/#/registration`

- ***Burpsuite***
  - Proxy Server
  - Interceptor mode

## Solution

**Step 1:**
Switch the Interceptor mode on

**Step 2:**
Rigister a user with any Email and Password combination on the Registration Page.

**Step 3:**
Switch to Burpsuite and look in the Post Request and search the email string.

**Step 4:**
Rewrite the sting to `<iframe src="javascript:alert(´xss´)">`.

**Step 5:**
Forward it to Solve the Challenge

**Extra Step Confirm**
Login to the Admin Account and go to the Admin interface now you became a alert with xss in it.


## Summary

This challenge exploits insufficient XSS protection.
The input is validated on the client side but not processed in the backend. This makes it possible to intercept and manipulate the sent data using Burp Suite, enabling XSS.


## Risks of XSS
- <ins>Manipulation of content</ins>: Attackers can change the content of websites or redirect users to phishing sites.
- <ins>Execution of malicious actions</ins>: Attackers can perform actions on behalf of the victim, such as submitting forms or making unauthorized requests.
- <ins>Spreading malware</ins>: XSS can be used to spread malware by inserting malicious scripts.