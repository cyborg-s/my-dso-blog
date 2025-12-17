---
title: Owasp Juice Shop 
slug: /projects/owasp-juice-shop
---


# OWASP Juice Shop Challange abgabe

## Table of Content

1. [Introduction](#introduction)
2. [What is the OWASP Juice Shop](#what-is-the-owasp-juice-shop)
3. [Exemples & Prevention](#exemples--prevention)
        -[XSS](#xss-cross-site-scripting)
        -[Improper Input Validation](#improper-input-validation)
        -[Broken Access Control](#broken-access-control)
4. [The Solved Challanges](#solved-challanges)



## Introduction
In this repository I explain how to solve the chalanges

- Client-side XSS Protection (XSS)
- Deluxe Fraud (Improper Input Validation)
- Forged Review (Broken Access Control)
  

> [!NOTE]
> All steps shown are for educational purposes only.

## What is the OWASP Juice Shop?

The Owasp Juice Shop is a "store" for learning and recognizing security vulnerabilities in web applications.



# Exemples & Prevention

## XSS (Cross-Site Scripting) 

XSS is a common security vulnerability in web applications that allows attackers to inject malicious code (often JavaScript) into web pages viewed by other users. This vulnerability arises from insufficient validation or sanitization of user input.


**Risks of XSS**
- <ins>Manipulation of content</ins>: Attackers can change the content of websites or redirect users to phishing sites.
- <ins>Execution of malicious actions</ins>: Attackers can perform actions on behalf of the victim, such as submitting forms or making unauthorized requests.
- <ins>Spreading malware</ins>: XSS can be used to spread malware by inserting malicious scripts.

**XSS protection**

 <ins>Input validation and sanitization</ins>:
   - Validate user input at the source and sanitize it to remove malicious content.
   - Use escaping and encoding (e.g., converting < to &lt;) before rendering data in the sink.

<ins>Content Security Policy (CSP)</ins>:
   - Implement a CSP to restrict the execution of unauthorized scripts or the loading of untrusted resources.

<ins>Contextual output encryption</ins>:
   - Use encryption mechanisms appropriate for the sink (e.g., HTML encryption for HTML contexts, JavaScript escaping for JavaScript contexts).

<ins>Cookie security</ins>:
   - Ensure that cookies are set with the “HttpOnly” and “Secure” flags to reduce the impact of XSS.

<ins>Regular security testing</ins>:
   - Perform automated and manual penetration tests to identify vulnerabilities in the flow from source to sink.




## Improper Input Validation

Improper input validation means that an application does not check user input, or does so inadequately, before processing it. This allows attackers to inject incorrect, malicious, or unexpected data, leading to security issues.

**Risk of Improper Input Validation**

- <ins>Missing length check</ins>: Allows excessively long inputs that can lead to buffer overflows.
- <ins>Unfiltered special characters</ins>: Accepting characters such as ', ", &lt;, and >, which can be exploited for injections or XSS.
- <ins>Direct use of user input</ins>: Directly passing input to databases, files, or APIs without validation.

**Improper Input Validation Protection**

<ins>Whitelist validation</ins> 
- Only allow specific, expected input values.

<ins>Escape and sanitize input</ins>:
- Use escaping for SQL, HTML, XML, etc.

<ins>Limit input size</ins>:
- Define the maximum length and valid ranges for input data.

<ins>Use secure APIs</ins>:
- Use prepared statements for database interactions.

<ins>Regular security testing</ins>:
- Perform code reviews and penetration tests to identify vulnerabilities.

<ins>Use secure frameworks</ins>:
- Modern frameworks often include built-in mechanisms to prevent improper input processing.




## Broken Access Control
“Access control” refers to the rules that determine who is allowed to access which resources.
“Broken access control” occurs when these rules are either not implemented at all or are implemented incorrectly. This allows attackers to perform actions that should actually be prohibited.

**Risk of Broken Access Control**

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


**Broken Access Control Protection**

<ins>Principle of least privilege</ins>

- Each user and role is only granted the rights that are absolutely necessary.
- No default admin rights for new users.

<ins>Use central access control</ins>

- Do not regulate access control distributed in the code, but via a central framework or middleware.
- Avoids inconsistencies between different endpoints.

<ins>Explicit access control instead of “security by obscurity”</ins>

- Security must not be based on URLs or API endpoints being unknown.
- Every request must be authenticated and authorized.

<ins>Enforce server-side authorization</ins>

- Never rely exclusively on client-side checks (JavaScript, hidden fields).
- All permissions must be checked on the server side.

<ins>Separation of roles and responsibilities (RBAC/ABAC)</ins>

- Implement role-based access control (RBAC) or attribute-based access control (ABAC).
- Example: Only users with the admin role are allowed to access admin routes.

<ins>Secure default configuration</ins>

- Disable or delete default user accounts with weak passwords.
- Do not allow anonymous default rights.

<ins>Regular testing and code reviews</ins>

- Manual and automated testing for access controls (e.g., with Postman, Burp Suite).
- Perform penetration tests to detect bypasses.

<ins>Logging and monitoring</ins>

- Log all access attempts.
- Trigger alerts when someone repeatedly attempts to access protected resources.


## Solved Challanges

| Name | Category | Discription | Link |
|----|----|----|----|
| Client-side XSS Protection | XSS | Perform a persisted XSS attack with <br/>`<iframe src="javascript:alert(´xss´)">` <br/> bypassing a client-side security mechanism. |[Client-side XSS Protection](./Client-side_XSS_Protection/Readme.md)|
| Deluxe Fraud | Improper Input Validation | Obtain a Deluxe Membership without paying for it. |[Deluxe Fraud](./Deluxe_Fraud/Readme.md)|
| Forged Review | Broken Access Control | Post a product review as another user or edit any user's existing review. |[Forged Review](./Forged_Review/Readme.md)|




