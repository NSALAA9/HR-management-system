 // Employee constructor function
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
  new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://via.placeholder.com/300x300.png?text=Ghazi+Samer"),
  new Employee(1001, "Lana Ali", "Finance", "Senior", "https://via.placeholder.com/300x300.png?text=Lana+Ali"),
  new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://via.placeholder.com/300x300.png?text=Tamara+Ayoub"),
  new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://via.placeholder.com/300x300.png?text=Safi+Walid"),
  new Employee(1004, "Omar Zaid", "Development", "Senior", "https://via.placeholder.com/300x300.png?text=Omar+Zaid"),
  new Employee(1005, "Rana Saleh", "Development", "Junior", "https://via.placeholder.com/300x300.png?text=Rana+Saleh"),
  new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://via.placeholder.com/300x300.png?text=Hadi+Ahmad")
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

/*// Event listener for form submission
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
document.getElementById('employeeCardsContainer').appendChild(employeeCard);

// Clear form inputs
document.getElementById('fullName').value = '';
document.getElementById('department').value = 'Administration';
document.getElementById('level').value = 'Junior';
document.getElementById('imageUrl').value = '';
});*/
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









  
  
  