
const { default: test } = require("node:test");
const Intern =require("../lib/Intern.js");

test("Tests the school", () => {
    const schoolTest = "School Name";
    const addEmployee = new Intern("Matthew", 7, "m.swineford@yahoo.com", schoolTest);
    expect(addEmployee.school).toBe(schoolTest);
});
test("Retreves the role.", () => {
    const returnedValue = "Employee";
    const addEmployee = new Intern("Matthew", 7, "m.swineford@yahoo.com", schoolTest);
    expect(addEmployee.getRole()).toBe(returnedValue);
});
