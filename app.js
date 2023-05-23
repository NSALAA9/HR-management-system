 /*// Employee constructor function
 function Employee(id, name, department, level, imageUrl, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary = salary;
}

// Calculate employee salary based on level
Employee.prototype.calculateSalary = function() {
  let min, max;
  switch (this.level) {
    case "Senior":
      min = 1500;
      max = 2000;
      break;
    case "Mid-Senior":
      min = 1000;
      max = 1500;
      break;
    case "Junior":
      min = 500;
      max = 1000;
      break;
  }
  const salary = Math.floor(Math.random() * (max - min + 1)) + min;
  const netSalary = salary * (1 - 0.075);
  return netSalary;
};

// Create employee instances
const employees = [
  new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true"),
  new Employee(1001, "Lana Ali", "Finance", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true"),
  new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true"),
  new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true"),
  new Employee(1004, "Omar Zaid", "Development", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true"),
  new Employee(1005, "Rana Saleh", "Development", "Junior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true"),
  new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true")
];

// Render employee list on home page
function renderEmployeeList() {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";
  employees.forEach(function(employee) {
    employee.salary = employee.calculateSalary();
    const employeeCard = document.createElement("div");
    employeeCard.className = "employee-card";
    employeeCard.innerHTML = `
      <img src="${employee.imageUrl}" alt="${employee.name}">
      <h2>${employee.name}</h2>
      <p>${employee.department}</p>
      <p>Salary: $${employee.salary.toFixed(2)}</p>
    `;
    employeeList.appendChild(employeeCard);
  });
}
// Generate unique four digits employee ID number
function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);}


// Event listener for form submission
document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const fullName = document.getElementById('fullName').value;
  const department = document.getElementById('department').value;
  const level = document.getElementById('level').value;
  const imageUrl = document.getElementById('imageUrl').value;
  const employeeId = generateEmployeeId();

  // Calculate salary for new employee
  const newEmployee = new Employee(employeeId, fullName, department, level, imageUrl);
  const salary = newEmployee.calculateSalary();

  // Create or get department section element
  let departmentSection = document.getElementById(department);
  if (!departmentSection) {
    departmentSection = document.createElement('div');
    departmentSection.classList.add('department-section');
    departmentSection.id = department;
    departmentSection.innerHTML = `<h2>${department}</h2>`;
    document.getElementById('employeeCardsContainer').appendChild(departmentSection);
  }

  // Render employee card
  const employeeCard = document.createElement('div');
  employeeCard.classList.add('employee-card');
  employeeCard.innerHTML = `
    <img src="${imageUrl}" alt="${fullName}" width="100">
    <h2>${fullName}</h2>
    <p>Department: ${department}</p>
    <p>Level: ${level}</p>
    <p>Employee ID: ${employeeId}</p>
    <p>Salary: $${salary.toFixed(2)}</p>
  `;
  departmentSection.appendChild(employeeCard);

  // Clear form inputs
  document.getElementById('fullName').value = '';
  document.getElementById('department').value = 'Administration';
  document.getElementById('level').value = 'Junior';
  document.getElementById('imageUrl').value = '';
});



renderEmployeeList();
renderEmployeeList(employees);*/


/*

// get the employee data from local storage, or set to an empty array if there is no data
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// function to add a new employee to the table and to local storage
function addEmployee() {
	// get the values of the input fields
	const nameInput = document.getElementById("name");
	const departmentInput = document.getElementById("department");
	const salaryInput = document.getElementById("salary");

	const name = nameInput.value;
	const department = departmentInput.value;
	const salary = salaryInput.value;

	// validate input
	if (name === "" || department === "" || salary === "") {
		alert("Please fill out all fields");
		return;
	}

	// create a new employee object
	const employee = {
		name,
		department,
		salary
	};

	// add the employee object to the employees array
	employees.push(employee);

	// save the employees array to local storage
	localStorage.setItem("employees", JSON.stringify(employees));

	// add the new employee row to the table
	const employeeTableBody = document.getElementById("employeeTableBody");
	const newRow = employeeTableBody.insertRow();
	const nameCell = newRow.insertCell();
	const departmentCell = newRow.insertCell();
	const salaryCell = newRow.insertCell();

	nameCell.innerText = name;
	departmentCell.innerText = department;
	salaryCell.innerText = salary;

	// clear the input fields
	nameInput.value = "";
	departmentInput.value = "";
	salaryInput.value = "";
}

// function to display the employee table with data from local storage
function displayEmployees() {
	// get the employee table body element
	const employeeTableBody = document.getElementById("employeeTableBody");

	// clear any existing rows from the table
	employeeTableBody.innerHTML = "";

	// loop through the employees array and add a row to the table for each employee
	for (let i = 0; i < employees.length; i++) {
		const employee = employees[i];

		const newRow = employeeTableBody.insertRow();
		const nameCell = newRow.insertCell();
		const departmentCell = newRow.insertCell();
		const salaryCell = newRow.insertCell();

  }
}
*/



  // function to add a new employee to the table and to local storage
function addEmployee() {
	// get the values of the input fields
	const nameInput = document.getElementById("name");
	const departmentInput = document.getElementById("department");
	const salaryInput = document.getElementById("salary");

	const name = nameInput.value;
	const department = departmentInput.value;
	const salary = salaryInput.value;

	// validate input
	if (name === "" || department === "" || salary === "") {
		alert("Please fill out all fields");
		return;
	}

	// create a new employee object
	const employee = {
		name,
		department,
		salary
	};

	// get the existing employees from local storage or initialize to an empty array
	let employees = JSON.parse(localStorage.getItem("employees")) || [];

	// add the new employee object to the employees array
	employees.push(employee);

	// save the updated employees array to local storage
	localStorage.setItem("employees", JSON.stringify(employees));

	// add the new employee row to the table
	const employeeTableBody = document.getElementById("employeeTableBody");
	const newRow = employeeTableBody.insertRow();
	const nameCell = newRow.insertCell();
	const departmentCell = newRow.insertCell();
	const salaryCell = newRow.insertCell();

	nameCell.innerText = name;
	departmentCell.innerText = department;
	salaryCell.innerText = salary;

	// clear the input fields
	nameInput.value = "";
	departmentInput.value = "";
	salaryInput.value = "";
}

// function to display the employee table with data from local storage
function displayEmployees() {
	// get the employee table body element
	const employeeTableBody = document.getElementById("employeeTableBody");

	// clear any existing rows from the table
	employeeTableBody.innerHTML = "";

	// get the existing employees from local storage or initialize to an empty array
	let employees = JSON.parse(localStorage.getItem("employees")) || [];

	// loop through the employees array and add a row to the table for each employee
	for (let i = 0; i < employees.length; i++) {
		const employee = employees[i];

		const newRow = employeeTableBody.insertRow();
		const nameCell = newRow.insertCell();
		const departmentCell = newRow.insertCell();
		const salaryCell = newRow.insertCell();

		nameCell.innerText = employee.name;
		departmentCell.innerText = employee.department;
		salaryCell.innerText = employee.salary;
	}
}




  
  