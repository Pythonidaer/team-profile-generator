const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// every card content goes into empty array
const teamMembers = [];

// user menu to askEngineer or askIntern questions, otherwise, create html and append cards depending on member type, then append closing html and console.log "HTML created!" or something
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

                    const indexHTML = './dist/index.html';
                    // const indexHTML = './sample.html';

                    const startingHTML = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/8af330bb1e.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="bg-danger">
            <h1 class="text-light text-center py-5">My Team</h1>
        </header>

        <!-- Cards to go into card deck -->
        <div class="container w-sm-75 mt-5">
            <div class="d-flex flex-wrap justify-content-center">`;

                    fs.writeFile(indexHTML, startingHTML, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });


                    // the second thing in this case statement should be the forEach that triggers fs.appendFile
                    // for every team member in the array, build a card depending on their role.
                    // the bottom case console.logs should be changed into buildManager(), buildEngineer() and buildIntern()
                    teamMembers.forEach(member => {
                        switch (member.getRole()) {
                            case "Manager":
                                const managerCard = `
                <div class="card mb-4 mr-sm-4 bg-light" style="width: 17rem; box-shadow: 6px 5px 5px 1px #888!important">
                    <div class="card-header bg-primary" style="margin-right: -1px;">
                        <h2 class="text-light">${member.getName()}</h2>
                        <h3 class="text-light"><i class="fas fa-mug-hot pr-2"></i>${member.getRole()}</h3>
                    </div>
                    <div class="bg-light py-4 px-3">            
                        <ul class="list-group list-group-flush border rounded" style="border: 1px solid rgba(0,0,0,.125)">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}?" target="_blank" rel="noopener">${member.getEmail()}</a></li>
                            <li class="list-group-item">Officer number: ${member.officeNumber}</li>
                        </ul>
                    </div>
                </div>`;

                                fs.appendFile(indexHTML, managerCard, (err) => {
                                    if (err) throw err;
                                    console.log('The "data to append" was appended to file!');
                                });
                                break;
                            case "Engineer":
                                const engineerCard = `
                <div class="card mb-4 mr-sm-4 bg-light" style="width: 17rem; box-shadow: 6px 5px 5px 1px #888!important">
                    <div class="card-header bg-primary" style="margin-right: -1px;">
                        <h2 class="text-light">${member.getName()}</h2>
                        <h3 class="text-light"><i class="fas fa-glasses pr-2"></i>${member.getRole()}</h3>
                    </div>
                    <div class="bg-light py-4 px-3">            
                        <ul class="list-group list-group-flush border rounded" style="border: 1px solid rgba(0,0,0,.125)">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}" target="_blank" rel="noopener">${member.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank" rel="noopener">${member.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>`;

                                fs.appendFile(indexHTML, engineerCard, (err) => {
                                    if (err) throw err;
                                    console.log('The "data to append" was appended to file!');
                                });
                                break;
                            case "Intern":
                                const internCard = `
                <div class="card mb-4 mr-sm-4 bg-light" style="width: 17rem; box-shadow: 6px 5px 5px 1px #888!important">
                    <div class="card-header bg-primary" style="margin-right: -1px;">
                        <h2 class="text-light">${member.getName()}</h2>
                        <h3 class="text-light"><i class="fas fa-user-graduate pr-2"></i>${member.getRole()}</h3>
                    </div>
                    <div class="bg-light py-4 px-3">            
                        <ul class="list-group list-group-flush border rounded" style="border: 1px solid rgba(0,0,0,.125)">
                            <li class="list-group-item">ID: ${member.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}" target="_blank" rel="noopener">${member.getEmail()}</a></li>
                            <li class="list-group-item">School: ${member.getSchool()}</li>
                        </ul>
                    </div>
                </div>`;

                                fs.appendFile(indexHTML, internCard, (err) => {
                                    if (err) throw err;
                                    console.log('The "data to append" was appended to file!');
                                });
                                break;
                        }
                    })

                    // the third thing in this case statement should be the ending of the html, so fs.appendFile
                    const closingHTML = `
            </div>
        </div>              
    </body>
</html>`;
                    fs.appendFile(indexHTML, closingHTML, (err) => {
                        if (err) throw err;
                        console.log('The "data to append" was appended to file!');
                    });
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
        const manager = new Manager(
            `${answers.managerName}`,
            `${answers.employeeID}`,
            `${answers.managerEmail}`,
            `${answers.managerOffice}`
        );

        teamMembers.push(manager);

        memberMenu()
    })
    .catch(err => console.log(err));



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
        })
        .catch(err => console.log(err));
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
        })
        .catch(err => console.log(err));
};
