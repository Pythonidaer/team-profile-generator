// Import parent class which manager extends from
const Employee = require('./Employee.js');

// super traits inherit from Employee parent class; constructor are either inherited or additional such as school.
class Intern extends Employee {
  constructor(name, id, email, school) {
   super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

    getSchool() {
        return `${this.school}`;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;
 