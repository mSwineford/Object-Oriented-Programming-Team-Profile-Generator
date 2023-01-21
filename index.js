const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");

const generator = require("./src/generator.js");

const path = require("path");
const output = path.resolve("dist");
const outputJoiner = path.join(output, "profile.html");

const inquirer = require("inquirer");
const fs = require("fs");

const teamArray = [];

function start () {
    function teamCreator () {
        inquirer.prompt(
            [{
                type: "roster",
                message: "Please choose the type of employee that you would like to add.",
                name: "employmentPrompt",
                choices: ["Intern", "Engineer", "Manager", "Done"]
            }]
            
        ).then(function (userInput) {
            switch(userInput.employmentPrompt) {
                case "Intern":
                    addIntern();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Manager":
                    addManager();
                    break;
                default:
                    addHTML();
            }
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internsName",
                message: "Please enter the intern's name.",
            },
            {
                type: "input",
                name: "internsId",
                message: "Please enter the intern's ID."
            },
            {
                type: "input",
                name: "internsEmail",
                message: "Please enter the intern's email."
            },
            {
                type: "input",
                name: "internsSchool",
                message: "Please the school that the intern attended."
            }
        ]).then(answers => {
            const intern = new Intern(
                answers.internsName, 
                answers.internsId,
                answers.inetrnsEmail,
                answers.internsSchool
                );
            teamArray.push(intern);
            teamCreator();
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the engineer's name.",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the engineer's ID."
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the engineer's email."
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the engineers Github."
            }
        ]).then(answers => {
            const engineer = new Engineer(
                answers.engineerName, 
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
                );
            teamArray.push(engineer);
            teamCreator();
        });
    }

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the manager's name.",
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the manager's ID."
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the manager's email."
            },
            {
                type: "input",
                name: "managerOffice",
                message: "Please the manager's office number."
            }
        ]).then(answers => {
            const manager = new Manager(
                answers.managerName, 
                answers.managerId,
                answers.managerEmail,
                answers.managerOffice
                );
            teamArray.push(manager);
            teamCreator();
        });
    }


    function addHTML() {
        console.log("A team has been generated.")
        fs.writeFileSync(outputJoiner, generator(teamArray), "utf-8")
    }
    teamCreator();
}

start();