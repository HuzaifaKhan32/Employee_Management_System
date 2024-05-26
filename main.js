import inquirer from "inquirer";
let listOfEmloyees = [
    {
        employeeId: 24567,
        name: "Saad",
        salary: 25000
    },
    {
        employeeId: 24568,
        name: "Huzaifa",
        salary: 50000
    },
    {
        employeeId: 24569,
        name: "Anas",
        salary: 75000
    }
];
async function addEmployee() {
    let num_add_employee = await inquirer.prompt([
        {
            name: "num",
            type: "number",
            message: "How many employees you have to add in list?"
        }
    ]);
    for (let i = 0; i < num_add_employee.num; i++) {
        let employeeId = await inquirer.prompt([
            {
                name: "id",
                type: "number",
                message: "Please, Enter the ID"
            }
        ]);
        let name = await inquirer.prompt([
            {
                name: "Name",
                type: "input",
                message: "Please, Enter the name of employee"
            }
        ]);
        let salary = await inquirer.prompt([
            {
                name: "sal",
                type: "number",
                message: "Please, Enter the Salary"
            }
        ]);
        let employee = {
            name: name.Name,
            employeeId: employeeId.id,
            salary: salary.sal
        };
        listOfEmloyees.push(employee);
    }
}
async function showEmployeeList() {
    console.log(listOfEmloyees);
}
async function filteredBySalary() {
    let salary = await inquirer.prompt([
        {
            name: "sal",
            type: "number",
            message: "Please Enter the amount. Amount must be 'Greater Than' You want to get"
        }
    ]);
    let filter = listOfEmloyees.filter((employee) => employee.salary > salary.sal);
    console.log(filter);
}
async function filteredByName() {
    let Name = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please Enter the Name of Employee"
        }
    ]);
    let filter = listOfEmloyees.filter((employee) => employee.name.includes(Name.name));
    console.log(filter);
}
async function deleteEmployeeById() {
    let employeeId = await inquirer.prompt([
        {
            name: "Id",
            type: "number",
            message: "Please Enter the ID of the employee which you want to remove"
        }
    ]);
    listOfEmloyees = listOfEmloyees.filter((employee) => employee.employeeId != employeeId.Id);
}
let condition = true;
while (condition) {
    let listOfOperations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please, Select the operation",
            choices: ["Add Employee", "Remove Employee", "Search Employee By Salary", "Search Employee By Name", "Show Employee List", "Exit"]
        }
    ]);
    switch (listOfOperations.operation) {
        case "Add Employee":
            await addEmployee();
            break;
        case "Remove Employee":
            await deleteEmployeeById();
            break;
        case "Search Employee By Salary":
            await filteredBySalary();
            break;
        case "Search Employee By Name":
            await filteredByName();
            break;
        case "Show Employee List":
            await showEmployeeList();
            break;
        case "Exit":
            condition = false;
            break;
    }
}
