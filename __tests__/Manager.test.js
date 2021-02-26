const Manager = require('../lib/Manager');

  describe("Manager", () => {
    it("is supposed to", () => {
      // instantiate class with string name, integer id, string email and integer office number
      const jester = new Manager("jester", 313, "manager@aol.com", 1);
      // expect to be specific string
      expect(jester.name).toBe("jester");
      // expect to be specific integer
      expect(jester.id).toBe(313);
      // expect to be specific string
      expect(jester.email).toBe("manager@aol.com");
      // expect to be specific integer
      // note, when entered in string template literal it becomes string
      expect(jester.officeNumber).toBe(1);
      // expects function to log same as jester.name
      expect(jester.getName()).toBe("jester");
      // expects function to log string version of jester.id
      expect(jester.getId()).toBe("313");
      // expects function to log same as jester.email
      expect(jester.getEmail()).toBe("manager@aol.com");
      // expects function to log Manager as role
      expect(jester.getRole()).toBe("Manager");
    })
  })
