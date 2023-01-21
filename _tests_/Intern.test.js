const Intern =require("../lib/Intern.js");

test("Tests the school", () => {
    const schoolTest = "School Name";
    const addEmployee = new Intern("Matthew", 7, "m.swineford@yahoo.com", schoolTest);
    expect(addEmployee.school).toBe(schoolTest);
});
test("Gets the school", () => {
    const schoolTest = "School Name";
    const addEmployee = new Intern("Matthew", 7, "m.swineford@yahoo.com", schoolTest);
    expect(addEmployee.getSchool()).toBe(schoolTest);
});
test("Retreves the role.", () => {
    const returnedValue = "Intern";
    const addEmployee = new Intern("Matthew", 7, "m.swineford@yahoo.com", "School Name");
    expect(addEmployee.getRole()).toBe(returnedValue);
});
