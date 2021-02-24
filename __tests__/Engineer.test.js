const Engineer = require('../lib/Engineer');

describe("Employee", () => {
    it("should...", () => {
      const getName = Engineer.prototype.getName = jest.fn();   
      const getId = Engineer.prototype.getId = jest.fn();
      const getEmail = Engineer.prototype.getEmail = jest.fn();
      const getGithub = Engineer.prototype.getGithub = jest.fn();
      const getRole = Engineer.prototype.getRole = jest.fn();
      const jester = new Engineer('jester', 123, 'jest@node.org', 'jester1');
      const expected = {
        name: 'jester',
        id: 123,
        email: 'jest@node.org',
        github: 'jester1'
      }
  
      jester.getName();
      jester.getId();
      jester.getEmail();
      jester.getRole();
      jester.getGithub();
  
      expect(jester).toEqual(expected);
    });
  });
