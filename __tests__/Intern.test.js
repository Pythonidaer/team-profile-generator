const Intern = require('../lib/Intern');

  describe("Intern", () => {
    it("is supposed to", () => {
      // instantiate class with string name, integer id, string email and string school name
      const jester = new Intern("jester", 666, "newbie@aol.edu", "Deviloper University");
      // expect to be specific string
      expect(jester.name).toBe("jester");
      // expect to be specific integer
      expect(jester.id).toBe(666);
      // expect to be specific string
      expect(jester.email).toBe("newbie@aol.edu");
      // expect to be specific string
      expect(jester.school).toBe("Deviloper University");
      // expects function to log same as jester.name
      expect(jester.getName()).toBe("jester");
      // expects function to log string version of jester.id
      expect(jester.getId()).toBe("666");
      // expects function to log same as jester.email
      expect(jester.getEmail()).toBe("newbie@aol.edu");
      // expects function to log same as jester.school
      expect(jester.getSchool()).toBe("Deviloper University");
      // expects function to log Intern as role
      expect(jester.getRole()).toBe("Intern");
    })
  })