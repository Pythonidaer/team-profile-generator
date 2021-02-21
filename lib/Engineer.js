const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, github) {
   super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

    getGithub() {
        console.log(`This employee's GitHub name is ${this.github}`);
    }

    getRole() {
        return 'Engineer'
    }
}

// const name = 'Jonathan';
// const id = 978;
// const email = 'jv@bz';
// const github = 'Pythonidaer';

// const engineer = new Engineer(name, id, email, github);

// console.log('---ENGINEER---');
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getGithub();
// engineer.getRole();

module.exports = Engineer;
 