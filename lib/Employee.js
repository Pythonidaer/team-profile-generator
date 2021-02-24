class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        return `This employee's name is ${this.name}`;
    }

    getId() {
        return `This employee has an id of ${this.id}`;
    }

    getEmail() {
        return `This employee has an email of ${this.email}`;
    }

    getRole() {
        return 'Employee'
    }
  }

  module.exports = Employee;
  