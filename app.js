

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
  
  renderEmployeeList();
  


  
  
  
  