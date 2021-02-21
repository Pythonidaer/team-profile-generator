const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, school) {
   super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

    getSchool() {
        console.log(`This employee's school is ${this.school}`);
    }

    getRole() {
        return 'Intern'
    }
}

// const name = 'Suzy';
// const id = 666;
// const email = 'ed@du';
// const school = 'North Shore';

// const intern = new Intern(name, id, email, school);

// console.log('---ENGINEER---');
// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getSchool();
// intern.getRole();

module.exports = Intern;