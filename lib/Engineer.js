const Employee = require('./Employee.js');

// super traits inherit from Employee parent class; constructor are either inherited or additional such as github.
class Engineer extends Employee {
  constructor(name, id, email, github) {
   super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

    getGithub() {
        return `${this.github}`;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;


