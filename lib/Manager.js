const Employee = require('./Employee.js');

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

// const name = 'Chuck';
// const id = 123;
// const email = 'ao@ol';
// const officeNumber = 5;

// const manager = new Manager(name, id, email, officeNumber);

// console.log('---MANAGER---');
// manager.getName();
// manager.getId();
// manager.getEmail();
// manager.getRole();

module.exports = Manager;