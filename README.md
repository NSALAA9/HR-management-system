# HR-management-system
Index HTML code represents a webpage for an "Employee Salary Calculator". It consists of a header with a navigation bar containing "Home" and "Accounting" links, a main section with a form for inputting employee information including full name, department, level, and image URL, and a container div with an id of "employeeCardsContainer" which is likely intended to display employee information cards.

The form has input fields for full name, department, level, and image URL, with appropriate labels and required attributes. The department and level fields are dropdown selects with predefined options. The form also includes a submit button for submitting the employee information.

The footer section includes social media links and a copyright statement.

There is a script tag at the end of the HTML code that references an external JavaScript file named "app.js". This is likely where the JavaScript code for handling form submission and rendering employee cards will be implemented.

________________________________________________________________________________________________________________
Accounting HTML code represents a webpage for an "Accounting Page". It includes a header with a navigation bar containing "Home" and "Employee Salary Calculator" links, a main section where the main content of the page will be added later, and a footer with a copyright statement.

The HTML file references an external CSS file named "style.css" for styling the page. The main content of the page is currently empty and will likely be populated with relevant accounting-related content later.

The footer section includes a copyright statement with the year "2023" and the name "Accounting Company", indicating that this is the footer for the accounting page of the website.
________________________________________________________________________________________________________________




CSS code provided contains styling rules for the  HTML pages. Let's go through the various sections:

Header:
The header is styled as a flex container with items aligned to the center and justified space-between.
It has a background color of #333 and text color of #fff.
It has a padding of 1rem and a background image set using the URL(https://www.shutterstock.com/image-photo/staff-working-document-management-system-260nw-2249422393.jpg), with the overlay blend mode.
The h1 tag inside the header has no margin, a font size of 2rem, and is centered.
The anchor tags (links) inside the header have a white color, no text decoration, margin-right of 1rem, and font styling properties such as font size, weight, style, and family.
Main:
The main section has a padding of 2rem.
Employee Card:
Employee cards are styled as flex containers with a column direction.
They have a background color of #fff, border radius of 10px, box shadow, margin, and padding.
The image inside the employee card has a width of 300px, height of 200px, object-fit set to cover, and border radius of 50% to make it a circular image.
The h2 and p tags inside the employee card have specific font sizes, margin, and text alignment.
Form Control and Employee Form:
The form control and employee form have a justified space-between property for alignment.
Image:
The image has align-items set to center for vertical alignment.
Footer:
The footer is styled as a flex container with items aligned to the center and justified space-between.
It has a background color of #3A98B9, text color of #fff, padding of 1rem, and a margin-top of 250px.
The p tag inside the footer has a font size of 1rem and no margin.
The anchor tag (link) inside the footer has a white color, no text decoration, and margin-left of 0.5rem.
________________________________________________________________________________________________________________



 JavaScript implementation for an employee management system. It includes a constructor function for an Employee object, a method to calculate employee salary based on their level, and functions to render the employee list on the home page and handle form submissions for adding new employees.

The Employee object has properties such as id, name, department, level, imageUrl, and salary. It also has a prototype method called calculateSalary() which calculates the net salary of the employee based on their level using a switch statement.

The renderEmployeeList() function is used to render the list of employees on the home page. It clears the existing list and then iterates through the employees array, calculates their salary using the calculateSalary() method, and creates DOM elements dynamically to display the employee information including their image, name, department, and salary.

The generateEmployeeId() function generates a unique four-digit employee ID number.

The event listener is added to the form with the ID 'employeeForm'. When the form is submitted, it prevents the default form submission behavior, retrieves the form data for the new employee, calculates their salary using the calculateSalary() method, creates DOM elements dynamically to display the new employee information including their ID, and appends it to the appropriate department section or creates a new department section if it doesn't exist. Finally, it clears the form inputs.



