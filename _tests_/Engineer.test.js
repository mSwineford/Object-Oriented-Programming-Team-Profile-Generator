const Engineer = require("../lib/Engineer.js");

test("Tests the Github", () => {
    const githubTest = "mSwineford";
    const addEmployee = new Engineer("Matthew", 7, "m.swineford@yahoo.com", githubTest);
    expect(addEmployee.github).toBe(githubTest);
});
test("Gets the Github", () => {
    const githubTest = "mSwineford";
    const addEmployee = new Engineer("Matthew", 7, "m.swineford@yahoo.com", githubTest);
    expect(addEmployee.getGithub()).toBe(githubTest);
});
test("Retreves the role.", () => {
    const returnedValue = "Engineer";
    const addEmployee = new Engineer("Matthew", 7, "m.swineford@yahoo.com", "mSwineford");
    expect(addEmployee.getRole()).toBe(returnedValue);
});
