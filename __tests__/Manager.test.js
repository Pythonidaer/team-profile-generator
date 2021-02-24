const Manager = require('../lib/Manager');

describe("Employee", () => {
    it("should...", () => {
      const getName = Manager.prototype.getName = jest.fn();   
      const getId = Manager.prototype.getId = jest.fn();
      const getEmail = Manager.prototype.getEmail = jest.fn();
      const getRole = Manager.prototype.getRole = jest.fn();
      const jester = new Manager('jester', 123, 'jest@node.org', '1');
      const expected = {
        name: 'jester',
        id: 123,
        email: 'jest@node.org',
        officeNumber: '1'
      }
  
      jester.getName();
      jester.getId();
      jester.getEmail();
      jester.getRole();
  
      expect(jester).toEqual(expected);
    });
  });
