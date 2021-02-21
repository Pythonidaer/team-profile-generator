const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const teamMembers = [];

function memberMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "memberAdd",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ])
        .then((answers) => {
            switch (answers.memberAdd) {
                case "Engineer": 
                    askEngineer();
                    break;
                case "Intern": 
                    askIntern();
                    break;
                case "I don't want to add any more team members":
                    console.log(teamMembers);
                    break;
            }  
        });
}

// Asks manager-specific questions to begin
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the team manager's id"
        }, 
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the team manager's office number?"
        }
    ])
    .then((answers) => {
        // Maybe this is where the Class goes.
        // Make a new Manager instantiation.

        const manager = new Manager(
            `${answers.managerName}`, 
            `${answers.employeeID}`, 
            `${answers.managerEmail}`, 
            `${answers.managerOffice}`
            );

        teamMembers.push(manager);

        memberMenu()
 
        const index = './output/index.html';

        // fs.writeFile(index, answers, (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // ); 
    })
    .catch(err => console.log(err));;
 


// Asks engineer-specific questions
function askEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineers's name?"
            },
            {
                type: "input",
                name: "employeeID",
                message: "What is your engineers's id"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineers's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your engineers's GitHub?"
            } 
        ])
        .then((answers) => {

            const engineer = new Engineer(
                `${answers.engineerName}`, 
                `${answers.employeeID}`, 
                `${answers.engineerEmail}`, 
                `${answers.engineerGitHub}`
                );
    
            teamMembers.push(engineer);

            memberMenu()
        });
};


// Asks intern-specific questions
function askIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "employeeID",
                message: "What is your intern's id"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?"
            } 
        ])
        .then((answers) => {

            const intern = new Intern(
                `${answers.internName}`, 
                `${answers.employeeID}`, 
                `${answers.internEmail}`, 
                `${answers.internSchool}`
                );
    
            teamMembers.push(intern);
            memberMenu()
        });
};