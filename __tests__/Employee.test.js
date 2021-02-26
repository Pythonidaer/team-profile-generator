const Employee = require('../lib/Employee');

  describe("Employee", () => {
    it("is supposed to", () => {
      // instantiate class with string name, integer id, and string email
      const jester = new Employee("jester", 745, "jester@aol.com");
      // expect to be specific string
      expect(jester.name).toBe("jester");
      // expect to be specific integer
      expect(jester.id).toBe(745);
      // expect to be specific string
      expect(jester.email).toBe("jester@aol.com");
      // expects function to log same as jester.name
      expect(jester.getName()).toBe("jester");
      // expects function to log string version of jester.id
      expect(jester.getId()).toBe("745");
      // expects function to log same as jester.email
      expect(jester.getEmail()).toBe("jester@aol.com");
      // expects function to log Employee as role
      expect(jester.getRole()).toBe("Employee");
    })
  })