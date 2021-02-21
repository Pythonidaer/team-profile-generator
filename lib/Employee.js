class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        console.log(`This employee's name is ${this.name}`);
    }

    getId() {
        console.log(`This employee has an id of ${this.id}`);
    }

    getEmail() {
        console.log(`This employee has an email of ${this.email}`);
    }

    getRole() {
        return 'Employee'
    }
  }
  module.exports = Employee;
  