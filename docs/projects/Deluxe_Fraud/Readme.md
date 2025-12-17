# Deluxe Fraud

> [!NOTE]
> All steps shown are for educational purposes only.

## Link to Video (German):
[Watch the Video to this Challenge](https://www.loom.com/share/a9ee4cd1bcc74aacbcdd66d629557f67?sid=c4378a77-1a85-4d7e-9e28-fcccc42e19ac)

## Table of Contents

1. [Challenge Introduction](#challenge-introduction)
2. [Hints](#hints)
3. [What do you need](#what-do-you-need-to-solve)
4. [Solution](#solution)
5. [Summary](#summary)
6. [Risks of Improper Input Validation](#risks-of-improper-input-validation)



## Challenge Introduction

**Difficulty**
- 3-Star-Challenge

**Category**
- Improper Input Validation

**Description**
- Obtain a Deluxe Membership without paying for it.

### Hints

<ins>OWASP</ins> 
- Look closely at what happens when you attempt to upgrade your account.

<ins>Developer Academy</ins>
- Not all users can take out Deluxe memberships.


### What do you Need to Solve

- ***OWASP Juice Shop***
  - Deluxe Membership site: `http://127.0.0.1:3000/#/payment/deluxe`

- ***Burpsuite***
  - Proxy Server
  - Interceptor mode

## Solution

**Step 1:**
Loin to Jims Account.

**Step 2:**
Switch to the Membership payment site.

**Step 3:**
Switch the Interceptor mode on

**Step 4:**
Click on Pay 49.00

**Step 5:**
Switch to Burpsuite and look in the Post Request. Search the payment Method "Wallet" and clear the string to "".

**Step 6:**
Forward it to Solve the Challenge

**Extra Step Confirm**
Switch to the Membership site if not automatically redirected `http://127.0.0.1:3000/#/deluxe-membership`, on the top you can read "You are already a deluxe member!"


## Summary
This challenge exploits insufficient improper input validation.
The input is sent on the client side but not validated in the backend. This makes it possible to intercept and manipulate the sent data using Burp Suite, allowing you to obtain membership for free.


## Risks of Improper Input Validation
- <ins>Missing length check</ins>: Allows excessively long inputs that can lead to buffer overflows or empty inputs.
- <ins>Unfiltered special characters</ins>: Accepting characters such as ', ", ```<, and >```, which can be exploited for injections or XSS.
- <ins>Direct use of user input</ins>: Directly passing input to databases, files, or APIs without validation.