const Employee = require("../lib/Employee.js");

test("Add a new epmloyee to the list.", () => {
    const addEmployee = new Employee();
    expect(typeof(addEmployee)).toBe("object");
});
test("This tests the employees name.", () => {
    const name = "Matthew";
    const addEmployee = new Employee(name);
    expect(addEmployee.name).toBe(name);
});
test("This tests the employees id.", () => {
    const id = 7;
    const addEmployee = new Employee("Matthew", id);
    expect(addEmployee.id).toBe(id);
});
test("This tests the employees email.", () => {
    const email = "m.swineford@yahoo.com";
    const addEmployee = new Employee("Matthew", 7, email);
    expect(addEmployee.email).toBe(email);
});

test("fetches the employee's name.", () => {
    const nameTest = "Matthew";
    const addEmployee = new Employee(nameTest);
    expect(addEmployee.getName()).toBe(nameTest);
});
test("fetches the employee's id.", () => {
    const idTest = 7;
    const addEmployee = new Employee("Matthew", idTest);
    expect(addEmployee.getId()).toBe(idTest);
});
test("fetches the employee's email.", () => {
    const emailTest = "m.swineford@yahoo.com";
    const addEmployee = new Employee("Matthew", 7, emailTest);
    expect(addEmployee.getEmail()).toBe(emailTest);
});
test("Retreves the role.", () => {
    const returnedValue = "Employee";
    const addEmployee = new Employee("Matthew", 7, "m.swineford@yahoo.com");
    expect(addEmployee.getRole()).toBe(returnedValue);
});
