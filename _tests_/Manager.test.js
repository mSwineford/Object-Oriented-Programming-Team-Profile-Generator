const Manager = require("../lib/Manager.js");

test("Tests the managers office number", () => {
    const officeTest = 7;
    const addEmployee = new Manager("Matthew", 7, "m.swineford@yahoo.com", officeTest);
    expect(addEmployee.officeNumber).toBe(officeTest);
});
test("Retreves the role.", () => {
    const returnedValue = "Manager";
    const addEmployee = new Manager("Matthew", 7, "m.swineford@yahoo.com", 4);
    expect(addEmployee.getRole()).toBe(returnedValue);
});