# Assignment 4 — Forms and Validation

**Name:** YOUR NAME
**Group:** YOUR GROUP

## Overview

This project demonstrates basic HTML forms, HTML5 validation,
Bootstrap form styling, and a responsive registration form.

## Technologies

- HTML5
- CSS3
- Bootstrap 5.3.3
- JavaScript

## How to Run

1. Download or clone this repository.
2. Open index.html in a browser.
3. An internet connection is required to load Bootstrap from the CDN.

This is a frontend demonstration. Forms do not send data to a server
or create real accounts.

## Part 1. Basic HTML Forms

### Task 0. Simple Contact Form

A basic contact form with name, email, message, and a submit button.
Each field has an associated label.

![Task 0 — Contact form](screenshots/task0.png)

### Task 1. Form with HTML5 Validation

The form uses required, type="email", minlength, and maxlength.
The browser displays validation messages when input is invalid.

![Task 1 — Browser validation](screenshots/task1.png)

## Part 2. Bootstrap Forms

### Task 2. Bootstrap Form Styling

The contact form uses Bootstrap form-control, form-label, and button
classes. The responsive grid displays name and email side by side
on medium and larger screens and stacks them on smaller screens.
Placeholders and helper text guide the user.

![Task 2 — Bootstrap contact form](screenshots/task2.png)

### Task 3. Bootstrap Validation Styles

JavaScript checks field validity and applies is-valid or is-invalid.
Feedback messages appear below the inputs.
After a submission attempt, feedback updates as the user edits fields.

![Task 3 — Invalid input](screenshots/task3-invalid.png)

![Task 3 — Valid input](screenshots/task3-valid.png)

## Part 3. Advanced Form Project

### Task 4. Registration Form

The registration form includes:

- First name and last name
- Email
- Password and password confirmation
- Gender radio buttons
- Optional hobby checkboxes
- Country dropdown
- Submit and Reset buttons

Passwords must contain at least eight characters.
Password confirmation must match the original password.
Gender and country are required.

The Reset button clears form values, validation styles,
custom validity messages, and submission feedback.

![Task 4 — Invalid registration](screenshots/task4-invalid.png)

![Task 4 — Valid registration](screenshots/task4-valid.png)

![Task 4 — Mobile layout](screenshots/task4-mobile.png)

## Manual Testing Checklist

- [ ] Task 1: empty required fields block submission.
- [ ] Task 1: an incorrectly formatted email blocks submission.
- [ ] Task 1: a message shorter than 10 characters is rejected.
- [ ] Task 3: invalid fields display red validation feedback.
- [ ] Task 3: valid fields display green validation feedback.
- [ ] Task 4: a password shorter than 8 characters is rejected.
- [ ] Task 4: different passwords are rejected.
- [ ] Task 4: changing the original password rechecks confirmation.
- [ ] Task 4: missing gender or country blocks submission.
- [ ] Task 4: multiple hobbies can be selected.
- [ ] Task 4: valid input displays a demo success message.
- [ ] Task 4: Reset clears values and validation feedback.
- [ ] The registration form displays correctly on a narrow screen.

## Work Process Summary

The project starts with a basic contact form and adds HTML5
validation constraints. Bootstrap classes and a responsive grid
provide the layout for the styled forms. JavaScript connects
field validity to Bootstrap feedback classes and checks whether
the two password values match. A reset handler removes validation
states so the registration form can be used again.