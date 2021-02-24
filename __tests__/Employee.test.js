const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should...", () => {
      const getName = Employee.prototype.getName = jest.fn();   
      const getId = Employee.prototype.getId = jest.fn();
      const getEmail = Employee.prototype.getEmail = jest.fn();
      const getRole = Employee.prototype.getRole = jest.fn();
      const jester = new Employee('jester', 123, 'jest@node.org');
      const expected = {
        name: 'jester',
        id: 123,
        email: 'jest@node.org'
      }
  
      jester.getName();
      jester.getId();
      jester.getEmail();
      jester.getRole();
  
      expect(jester).toEqual(expected);
    });
  });
