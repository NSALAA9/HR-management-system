/*window.onload = function() {
    // Retrieve the employees from local storage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    // Define an object to store department information
    const departmentInfo = {};
  
    // Iterate over the employees and populate the departmentInfo object
    employees.forEach(employee => {
      if (!departmentInfo[employee.department]) {
        departmentInfo[employee.department] = {
          count: 1,
          totalSalary: employee.salary
        };
      } else {
        departmentInfo[employee.department].count++;
        departmentInfo[employee.department].totalSalary += employee.salary;
      }
    });
  
    // Get the table element from the DOM
    const table = document.querySelector("table");
  
    // Create the table header row
    const headerRow = document.createElement("tr");
    const departmentHeader = document.createElement("th");
    const employeeCountHeader = document.createElement("th");
    const totalSalaryHeader = document.createElement("th");
    const averageSalaryHeader = document.createElement("th");
    departmentHeader.textContent = "Department";
    employeeCountHeader.textContent = "# of Employees";
    totalSalaryHeader.textContent = "Total Salary";
    averageSalaryHeader.textContent = "Average Salary";
    headerRow.appendChild(departmentHeader);
    headerRow.appendChild(employeeCountHeader);
    headerRow.appendChild(totalSalaryHeader);
    headerRow.appendChild(averageSalaryHeader);
    table.appendChild(headerRow);
  
    // Iterate over the departmentInfo object and create a row for each department
    let totalEmployees = 0;
    let totalSalary = 0;
    for (const department in departmentInfo) {
      const departmentRow = document.createElement("tr");
      const departmentName = document.createElement("td");
      const employeeCount = document.createElement("td");
      const totalSalary = document.createElement("td");
      const averageSalary = document.createElement("td");
      const departmentData = departmentInfo[department];
      departmentName.textContent = department;
      employeeCount.textContent = departmentData.count;
      totalSalary.textContent = `$${departmentData.totalSalary.toLocaleString()}`;
      averageSalary.textContent = `$${(departmentData.totalSalary / departmentData.count).toLocaleString()}`;
      departmentRow.appendChild(departmentName);
      departmentRow.appendChild(employeeCount);
      departmentRow.appendChild(totalSalary);
      departmentRow.appendChild(averageSalary);
      table.appendChild(departmentRow);
  
      totalEmployees += departmentData.count;
      totalSalary += departmentData.totalSalary;
    }
  
    // Create the table footer row
    const footerRow = document.createElement("tr");
    const totalEmployeesFooter = document.createElement("td");
    const totalSalaryFooter = document.createElement("td");
    const averageSalaryFooter = document.createElement("td");
    const totalLabel = document.createElement("td");
    totalLabel.textContent = "Total";
    totalEmployeesFooter.textContent = totalEmployees;
    totalSalaryFooter.textContent = `$${totalSalary.toLocaleString()}`;
    averageSalaryFooter.textContent = `$${(totalSalary / employees.length).toLocaleString()}`;
    footerRow.appendChild(totalLabel);
    footerRow.appendChild(totalEmployeesFooter);
    footerRow.appendChild(totalSalaryFooter);
    footerRow.appendChild(averageSalaryFooter);
    table.appendChild(footerRow);
  };*/




  /*
  window.onload = function() {
    // Retrieve the employees from local storage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    // Define an object to store department information
    const departmentInfo = {};
  
    // Iterate over the employees and populate the departmentInfo object
    employees.forEach(employee => {
      if (!departmentInfo[employee.department]) {
        departmentInfo[employee.department] = {
          count: 1,
          totalSalary: employee.salary
        };
      } else {
        departmentInfo[employee.department].count++;
        departmentInfo[employee.department].totalSalary += employee.salary;
      }
    });
  
    // Get the table element from the DOM
    const table = document.querySelector("table");
  
    // Create the table header row
    const headerRow = document.createElement("tr");
    const departmentHeader = document.createElement("th");
    const employeeCountHeader = document.createElement("th");
    const totalSalaryHeader = document.createElement("th");
    const averageSalaryHeader = document.createElement("th");
    departmentHeader.textContent = "Department";
    employeeCountHeader.textContent = "# of Employees";
    totalSalaryHeader.textContent = "Total Salary";
    averageSalaryHeader.textContent = "Average Salary";
    headerRow.appendChild(departmentHeader);
    headerRow.appendChild(employeeCountHeader);
    headerRow.appendChild(totalSalaryHeader);
    headerRow.appendChild(averageSalaryHeader);
    table.appendChild(headerRow);
  
    // Iterate over the departmentInfo object and create a row for each department
    let totalEmployees = 0;
    let totalSalary = 0;
    for (const department in departmentInfo) {
      const departmentRow = document.createElement("tr");
      const departmentName = document.createElement("td");
      const employeeCount = document.createElement("td");
      const totalSalary = document.createElement("td");
      const averageSalary = document.createElement("td");
      const departmentData = departmentInfo[department];
      departmentName.textContent = department;
      employeeCount.textContent = departmentData.count;
      totalSalary.textContent = `$${departmentData.totalSalary.toLocaleString()}`;
      averageSalary.textContent = `$${(departmentData.totalSalary / departmentData.count).toLocaleString()}`;
      departmentRow.appendChild(departmentName);
      departmentRow.appendChild(employeeCount);
      departmentRow.appendChild(totalSalary);
      departmentRow.appendChild(averageSalary);
      table.appendChild(departmentRow);
  
      totalEmployees += departmentData.count;
      totalSalary += departmentData.totalSalary;
    }
  
    // Create the table footer row
    const footerRow = document.createElement("tr");
    const totalEmployeesFooter = document.createElement("td");
    const totalSalaryFooter = document.createElement("td");
    const averageSalaryFooter = document.createElement("td");
    const totalLabel = document.createElement("td");
    totalLabel.textContent = "Total";
    totalEmployeesFooter.textContent = totalEmployees;
    totalSalaryFooter.textContent = `$${totalSalary.toLocaleString()}`;
    averageSalaryFooter.textContent = `$${(totalSalary / employees.length).toLocaleString()}`;
    footerRow.appendChild(totalLabel);
    footerRow.appendChild(totalEmployeesFooter);
    footerRow.appendChild(totalSalaryFooter);
    footerRow.appendChild(averageSalaryFooter);
    table.appendChild(footerRow);
  };
  */



  /*
  window.onload = function() {
    // Retrieve the employees from local storage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    // Define an object to store department information
    let departmentInfo = JSON.parse(localStorage.getItem("departmentInfo")) || {};
  
    // Iterate over the employees and populate the departmentInfo object
    employees.forEach(employee => {
      if (!departmentInfo[employee.department]) {
        departmentInfo[employee.department] = {
          count: 1,
          totalSalary: employee.salary
        };
      } else {
        departmentInfo[employee.department].count++;
        departmentInfo[employee.department].totalSalary += employee.salary;
      }
    });
  
    // Save the department information to local storage
    localStorage.setItem("departmentInfo", JSON.stringify(departmentInfo));
  
    // Get the table element from the DOM
    const table = document.querySelector("table");
  
    // Create the table header row
    const headerRow = document.createElement("tr");
    const departmentHeader = document.createElement("th");
    const employeeCountHeader = document.createElement("th");
    const totalSalaryHeader = document.createElement("th");
    const averageSalaryHeader = document.createElement("th");
    departmentHeader.textContent = "Department";
    employeeCountHeader.textContent = "# of Employees";
    totalSalaryHeader.textContent = "Total Salary";
    averageSalaryHeader.textContent = "Average Salary";
    headerRow.appendChild(departmentHeader);
    headerRow.appendChild(employeeCountHeader);
    headerRow.appendChild(totalSalaryHeader);
    headerRow.appendChild(averageSalaryHeader);
    table.appendChild(headerRow);
  
    // Iterate over the departmentInfo object and create a row for each department
    let totalEmployees = 0;
    let totalSalary = 0;
    for (const department in departmentInfo) {
      const departmentRow = document.createElement("tr");
      const departmentName = document.createElement("td");
      const employeeCount = document.createElement("td");
      const totalSalaryCell = document.createElement("td");
      const averageSalary = document.createElement("td");
      const departmentData = departmentInfo[department];
      departmentName.textContent = department;
      employeeCount.textContent = departmentData.count;
      totalSalaryCell.textContent = `$${departmentData.totalSalary.toLocaleString()}`;
      averageSalary.textContent = `$${(departmentData.totalSalary / departmentData.count).toLocaleString()}`;
      departmentRow.appendChild(departmentName);
      departmentRow.appendChild(employeeCount);
      departmentRow.appendChild(totalSalaryCell);
      departmentRow.appendChild(averageSalary);
      table.appendChild(departmentRow);
  
      totalEmployees += departmentData.count;
      totalSalary += departmentData.totalSalary;
    }
  
    // Create the table footer row
    const footerRow = document.createElement("tr");
    const totalEmployeesFooter = document.createElement("td");
    const totalSalaryFooter = document.createElement("td");
    const averageSalaryFooter = document.createElement("td");
    const totalLabel = document.createElement("td");
    totalLabel.textContent = "Total";
    totalEmployeesFooter.textContent = totalEmployees;
    totalSalaryFooter.textContent = `$${totalSalary.toLocaleString()}`;
    averageSalaryFooter.textContent = `$${(totalSalary / employees.length).toLocaleString()}`;
    footerRow.appendChild(totalLabel);
    footerRow.appendChild(totalEmployeesFooter);
    footerRow.appendChild(totalSalaryFooter);
    footerRow.appendChild(averageSalaryFooter);
    table.appendChild(footerRow);
  };*/

/*

  'use strict'

  let allEmployee = [];
  
  let eachDepartment = {
      countAdministration: 0,
      countMarketing: 0,
      countDevelopment: 0,
      countFinance: 0,
      salaryAdministration: 0,
      salaryMarketing: 0,
      salaryDevelopment: 0,
      salaryFinance: 0,
      avgAdministration: 0.0,
      avgMarketing: 0.0,
      avgDevelopment: 0.0,
      avgFinance: 0.0,
      totalEmployees: 0,
      totalSalary: 0,
      totalAvgSalary: 0.0
  };
  
  
  
  // creating Thead of the table//
  let thead = document.getElementById('thead');
  let trEl = document.createElement('tr');
  thead.appendChild(trEl);
  
  let thEl1 = document.createElement('th');
  thEl1.textContent = "Department";
  trEl.appendChild(thEl1);
  
  let thEl2 = document.createElement('th');
  thEl2.textContent = "# of Employee";
  trEl.appendChild(thEl2);
  
  let thEl3 = document.createElement('th');
  thEl3.textContent = "Total Salary";
  trEl.appendChild(thEl3);
  
  let thEl4 = document.createElement('th');
  thEl4.textContent = "Average";
  trEl.appendChild(thEl4);
  
  // creating Row of Administration department//
  let tbody = document.getElementById('tbody');
  let trEl1 = document.createElement('tr');
  tbody.appendChild(trEl1);
  
  let tdEl1 = document.createElement('td');
  tdEl1.textContent = "Administration";
  trEl1.appendChild(tdEl1);
  
  let tdEl2 = document.createElement('td');
  trEl1.appendChild(tdEl2);
  let tdEl3 = document.createElement('td');
  trEl1.appendChild(tdEl3);
  let tdEl4 = document.createElement('td');
  trEl1.appendChild(tdEl4);
  
  // creating Row of Marketing department//
  let trEl2 = document.createElement('tr');
  tbody.appendChild(trEl2);
  
  let tdEl5 = document.createElement('td');
  tdEl5.textContent = "Marketing";
  trEl2.appendChild(tdEl5);
  
  let tdEl6 = document.createElement('td');
  trEl2.appendChild(tdEl6);
  
  let tdEl7 = document.createElement('td');
  trEl2.appendChild(tdEl7);
  
  let tdEl8 = document.createElement('td');
  trEl2.appendChild(tdEl8);
  
  // creating Row of Development department//
  let trEl3 = document.createElement('tr');
  tbody.appendChild(trEl3);
  
  let tdEl9 = document.createElement('td');
  tdEl9.textContent = "Development";
  trEl3.appendChild(tdEl9);
  
  let tdEl10 = document.createElement('td');
  trEl3.appendChild(tdEl10);
  
  let tdEl11 = document.createElement('td');
  trEl3.appendChild(tdEl11);
  
  let tdEl12 = document.createElement('td');
  trEl3.appendChild(tdEl12);
  
  // creating Row of Finance department//
  let trEl4 = document.createElement('tr');
  tbody.appendChild(trEl4);
  
  let tdEl13 = document.createElement('td');
  tdEl13.textContent = "Finance";
  trEl4.appendChild(tdEl13);
  
  let tdEl14 = document.createElement('td');
  trEl4.appendChild(tdEl14);
  
  let tdEl15 = document.createElement('td');
  trEl4.appendChild(tdEl15);
  
  let tdEl16 = document.createElement('td');
  trEl4.appendChild(tdEl16);
  
  // creating footer of the table//
  let tfoot = document.getElementById('tfoot');
  let trEl5 = document.createElement('tr');
  tfoot.appendChild(trEl5);
  
  let tdEl17 = document.createElement('td');
  tdEl17.textContent = "Total";
  trEl5.appendChild(tdEl17);
  
  let tdEl18 = document.createElement('td');
  trEl5.appendChild(tdEl18);
  
  let tdEl19 = document.createElement('td');
  trEl5.appendChild(tdEl19);
  
  let tdEl20 = document.createElement('td');
  trEl5.appendChild(tdEl20);
  
  
  
  
  function getEmployee() {
      let allEmployeeJson = localStorage.getItem('allEmployee');
      let allEmployeeFromStorage = JSON.parse(allEmployeeJson);
      allEmployee = allEmployeeFromStorage;
  }
  
  getEmployee()
  infoDepartment()
 
  
  function render() {
  
      
      tdEl2.textContent = eachDepartment.countAdministration;
      tdEl3.textContent = eachDepartment.salaryAdministration;
      tdEl4.textContent = eachDepartment.avgAdministration;
  
   
      tdEl6.textContent = eachDepartment.countMarketing;
      tdEl7.textContent = eachDepartment.salaryMarketing;
      tdEl8.textContent = eachDepartment.avgMarketing;
  
      //Row of Development department
      tdEl10.textContent = eachDepartment.countDevelopment;
      tdEl11.textContent = eachDepartment.salaryDevelopment;
      tdEl12.textContent = eachDepartment.avgDevelopment;
  
      //Row of Finance department
      tdEl14.textContent = eachDepartment.countFinance;
      tdEl15.textContent = eachDepartment.salaryFinance;
      tdEl16.textContent = eachDepartment.avgFinance;
  
  
      //Row of ToTal
      tdEl18.textContent = eachDepartment.totalEmployees;
      tdEl19.textContent = eachDepartment.totalSalary;
      tdEl20.textContent = eachDepartment.totalAvgSalary;
  }
  
  
  function infoDepartment() {
  
      if (allEmployee == null) {
          allEmployee = [];
      }
  
  
      for (let i = 0; i < allEmployee.length; i++) {
          if (allEmployee[i].department == "Administration") {
  
              eachDepartment.countAdministration += 1;
              eachDepartment.salaryAdministration += Math.floor(allEmployee[i].salary);
  
  
          }
  
          if (allEmployee[i].department == "Marketing") {
              eachDepartment.countMarketing += 1;
              eachDepartment.salaryMarketing += Math.floor(allEmployee[i].salary);
  
          }
  
          if (allEmployee[i].department == "Development") {
              eachDepartment.countDevelopment += 1;
              eachDepartment.salaryDevelopment += Math.floor(allEmployee[i].salary);
  
          }
  
          if (allEmployee[i].department == "Finance") {
              eachDepartment.countFinance += 1;
              eachDepartment.salaryFinance += Math.floor(allEmployee[i].salary);
  
          }
  
      }
  
      eachDepartment.avgAdministration = eachDepartment.salaryAdministration / eachDepartment.countAdministration;
      eachDepartment.avgMarketing = Math.floor(eachDepartment.salaryMarketing / eachDepartment.countMarketing);
      eachDepartment.avgDevelopment = Math.floor(eachDepartment.salaryDevelopment / eachDepartment.countDevelopment);
      eachDepartment.avgFinance = Math.floor(eachDepartment.salaryFinance / eachDepartment.countFinance);
  
      eachDepartment.totalEmployees = eachDepartment.countAdministration + eachDepartment.countMarketing + eachDepartment.countDevelopment + eachDepartment.countFinance;
      eachDepartment.totalSalary = eachDepartment.salaryAdministration + eachDepartment.salaryMarketing + eachDepartment.salaryDevelopment + eachDepartment.salaryFinance;
      eachDepartment.totalAvgSalary = Math.floor((eachDepartment.salaryAdministration + eachDepartment.salaryMarketing + eachDepartment.salaryDevelopment + eachDepartment.salaryFinance) / eachDepartment.totalEmployees);
  
      return eachDepartment;
  }
  
  
  
  render()*/
/*
  // accounting.js

// Sample employee data for demonstration
const employees = [
  { name: 'John Doe', department: 'Administration', salary: 5000 },
  { name: 'Jane Smith', department: 'Administration', salary: 6000 },
  { name: 'Michael Johnson', department: 'Marketing', salary: 4500 },
  { name: 'Emily Davis', department: 'Marketing', salary: 5500 },
  { name: 'David Wilson', department: 'Development', salary: 7000 },
  { name: 'Sarah Brown', department: 'Development', salary: 6500 },
  { name: 'Robert Lee', department: 'Finance', salary: 5500 },
  { name: 'Jennifer Anderson', department: 'Finance', salary: 6000 },
];

// Function to calculate department information
function calculateDepartmentInfo() {
  const departmentData = {};

  // Calculate department totals
  for (const employee of employees) {
    if (departmentData[employee.department]) {
      departmentData[employee.department].count++;
      departmentData[employee.department].totalSalary += employee.salary;
    } else {
      departmentData[employee.department] = {
        count: 1,
        totalSalary: employee.salary,
      };
    }
  }

  // Calculate averages and total
  let totalEmployees = 0;
  let totalSalary = 0;

  for (const department in departmentData) {
    const departmentInfo = departmentData[department];
    departmentInfo.averageSalary = departmentInfo.totalSalary / departmentInfo.count;
    totalEmployees += departmentInfo.count;
    totalSalary += departmentInfo.totalSalary;
  }

  const averageSalaryAllDepartments = totalSalary / totalEmployees;

  // Render department information in the table
  const tbody = document.getElementById('departmentTableBody');
  tbody.innerHTML = '';

  for (const department in departmentData) {
    const departmentInfo = departmentData[department];

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${department}</td>
      <td>${departmentInfo.count}</td>
      <td>${departmentInfo.totalSalary}</td>
      <td>${departmentInfo.averageSalary}</td>
    `;

    tbody.appendChild(row);
  }

  // Render table footer with totals
  const tableFooter = document.getElementById('tableFooter');
  tableFooter.innerHTML = `
    <tr>
      <td colspan="4">Total</td>
    </tr>
    <tr>
      <td colspan="4">Total number of employees: ${totalEmployees}</td>
    </tr>
    <tr>
      <td colspan="4">Total salary for all departments: ${totalSalary}</td>
    </tr>
    <tr>
      <td colspan="4">Average salary for all departments: ${averageSalaryAllDepartments}</td>
    </tr>
  `;
}

// Call the function to calculate and render department information
calculateDepartmentInfo();
*/

// accounting.js

// Sample employee data for demonstration
const employees = [
  { name: 'John Doe', department: 'Administration', salary: 5000 },
  { name: 'Jane Smith', department: 'Administration', salary: 6000 },
  { name: 'Michael Johnson', department: 'Marketing', salary: 4500 },
  { name: 'Emily Davis', department: 'Marketing', salary: 5500 },
  { name: 'David Wilson', department: 'Development', salary: 7000 },
  { name: 'Sarah Brown', department: 'Development', salary: 6500 },
  { name: 'Robert Lee', department: 'Finance', salary: 5500 },
  { name: 'Jennifer Anderson', department: 'Finance', salary: 6000 },
];

// Function to calculate department information
function calculateDepartmentInfo() {
  const departmentData = {};

  // Calculate department totals
  for (const employee of employees) {
    if (departmentData[employee.department]) {
      departmentData[employee.department].count++;
      departmentData[employee.department].totalSalary += employee.salary;
    } else {
      departmentData[employee.department] = {
        count: 1,
        totalSalary: employee.salary,
      };
    }
  }

  // Calculate averages and total
  let totalEmployees = 0;
  let totalSalary = 0;

  for (const department in departmentData) {
    const departmentInfo = departmentData[department];
    departmentInfo.averageSalary = departmentInfo.totalSalary / departmentInfo.count;
    totalEmployees += departmentInfo.count;
    totalSalary += departmentInfo.totalSalary;
  }

  const averageSalaryAllDepartments = totalSalary / totalEmployees;

  // Render department information in the table
  const tbody = document.getElementById('departmentTableBody');
  tbody.innerHTML = '';

  for (const department in departmentData) {
    const departmentInfo = departmentData[department];

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${department}</td>
      <td>${departmentInfo.count}</td>
      <td>${departmentInfo.totalSalary}</td>
      <td>${departmentInfo.averageSalary}</td>
    `;

    tbody.appendChild(row);
  }

  // Render table footer with totals
  const tableFooter = document.getElementById('tableFooter');
  tableFooter.innerHTML = `
    <tr>
      <td colspan="4">Total</td>
    </tr>
    <tr>
      <td colspan="4">Total number of employees: ${totalEmployees}</td>
    </tr>
    <tr>
      <td colspan="4">Total salary for all departments: ${totalSalary}</td>
    </tr>
    <tr>
      <td colspan="4">Average salary for all departments: ${averageSalaryAllDepartments}</td>
    </tr>
  `;
}

// Call the function to calculate and render department information
calculateDepartmentInfo();


