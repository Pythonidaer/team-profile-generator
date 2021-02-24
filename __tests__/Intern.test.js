const Intern = require('../lib/Intern');

describe("Employee", () => {
    it("should...", () => {
      const getName = Intern.prototype.getName = jest.fn();   
      const getId = Intern.prototype.getId = jest.fn();
      const getEmail = Intern.prototype.getEmail = jest.fn();
      const getSchool = Intern.prototype.getSchool = jest.fn();
      const getRole = Intern.prototype.getRole = jest.fn();
      const jester = new Intern('jester', 123, 'jest@node.org', 'jest.edu');
      const expected = {
        name: 'jester',
        id: 123,
        email: 'jest@node.org',
        school: 'jest.edu'
      }
  
      jester.getName();
      jester.getId();
      jester.getEmail();
      jester.getRole();
      jester.getSchool();
  
      expect(jester).toEqual(expected);
    });
  });
