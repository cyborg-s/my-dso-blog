# Forged Review

> [!NOTE]
> All steps shown are for educational purposes only.

## Link to Video (German):
[Watch the Video to this Challenge](https://www.loom.com/share/25dda056044342b9bdfee0f004d2a80b?sid=21d2c687-5540-42ff-818c-c75fd53e4a75)

## Table of Contents

1. [Challenge Introduction](#challenge-introduction)
2. [Hints](#hints)
3. [What do you need](#what-do-you-need-to-solve)
4. [Solution](#solution)
5. [Summary](#summary)
6. [Risks of Broken Access Control](#risks-of-broken-access-control)



## Challenge Introduction

**Difficulty**
- 3-Star-Challenge

**Category**
- Broken Access Control

**Description**
- Post a product review as another user or edit any user's existing review.

### Hints

<ins>OWASP</ins> 
- Observe the flow of product review posting and editing and see if you can exploit it.


### What do you Need to Solve

- ***OWASP Juice Shop***
  - Product overview `http://127.0.0.1:3000/#`

- ***Burpsuite***
  - Proxy Server
  - Interceptor mode
  - Http history

## Solution

**Step 1:**
Click on a product that has a review from another user.

**Step 2:**
Write your own review to get access to the review editor.

**Step 3:**
Open the review editor by clicking on your review and submit this review.

**Step 4:**
Switch to burpsuite and search for the get request in the http history to find the endpoint of your review. `rest/products/<ID>/reviews`

**Step 5:**
Open the endpoint in a browser `http://127.0.0.1:3000/rest/products/<ID>/reviews`

**Step 6:**
Search for the ID of the review you want to change and copy it.

**Step 7:**
Go back to the page with the review and open the review editor again. Now enter the new review.

**Step 8:**
Switch the Interceptor mode on in Burpsuite and submit the review.

**Step 9:**
Look in Burpsuite to the patch request and change the id of the review to the copied one.

**Step 10:**
Forward it to Solve the Challenge. You see now the new review from the other user.



## Summary
Broken Access Control exploits this challenge.
The endpoint can be viewed by anyone, allowing data to be copied.
In addition, the input on the client side is assigned an ID, but this is not compared with the user in the backend. This makes it possible to intercept and manipulate the data using Burp Suite, allowing changes to be made to third-party data.


## Risks of Broken Access Control
<ins>Data loss and data leaks</ins>

- Unauthorized persons can access confidential data belonging to other users or companies.
- Example: Health data, financial information, personal data.

<ins>Data manipulation</ins>

- Attackers can change or delete other people's data.
- Example: Changing orders, bank transfers, or user profiles.

<ins>Privilege escalation</ins>

- A normal user obtains administrator rights.
- Consequence: Complete control over the application.

<ins>Bypassing business logic</ins>

- Access to functions that should actually be restricted.
- Example: Free orders through direct API access.

<ins>Compliance violations</ins>

- Violation of laws (GDPR, HIPAA, etc.) if personal data is unprotected.
- Consequence: High penalties and legal consequences.

<ins>Complete system compromise</ins>

- With admin rights or unprotected interfaces, attackers can take over the entire system.