// Import parent class which manager extends from
const Employee = require('./Employee.js');

// super traits inherit from Employee parent class; constructor are either inherited or additional such as officeNumber.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
   super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;