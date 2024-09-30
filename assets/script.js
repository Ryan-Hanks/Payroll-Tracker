// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let newEmployees = true;
  let employees= [];
  while(newEmployees){
    let employee = {
      firstName: window.prompt("Please enter the employee's first name."),
      lastName: window.prompt("Please enter the employee's last name."),
      salary: window.prompt("Please enter the employee's salary(number only)."),
    }
    employees.push(employee);
    newEmployees = window.confirm("Would you like to add another employee?");
  }
  return(employees);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const averageCell = document.querySelector('#average-salary');
  let averageSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    averageSalary = averageSalary + (employeesArray[i].salary*1);
  }
  averageSalary = (averageSalary) / (employeesArray.length);
  averageCell.innerHTML = `Average salary: ${averageSalary.toLocaleString("en-US",{style:"currency", currency:"USD"})}`;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const winnerCell = document.querySelector('#drawing-winner');
  const randomNumber = Math.floor(Math.random() * employeesArray.length);
  winnerCell.innerHTML = `Random Drawing Winner: ${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName}`;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
