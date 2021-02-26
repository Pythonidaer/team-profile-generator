const Engineer = require('../lib/Engineer');

  describe("Engineer", () => {
    it("is supposed to", () => {
      // instantiate class with string name, integer id, string email and string github name
      const jester = new Engineer("jester", 978, "developer@aol.com", "Deviloper");
      // expect to be specific string
      expect(jester.name).toBe("jester");
      // expect to be specific integer
      expect(jester.id).toBe(978);
      // expect to be specific string
      expect(jester.email).toBe("developer@aol.com");
      // expect to be specific string
      expect(jester.github).toBe("Deviloper");
      // expects function to log same as jester.name
      expect(jester.getName()).toBe("jester");
      // expects function to log string version of jester.id
      expect(jester.getId()).toBe("978");
      // expects function to log same as jester.email
      expect(jester.getEmail()).toBe("developer@aol.com");
      // expects function to log same as jester.github
      expect(jester.getGithub()).toBe("Deviloper");
      // expects function to log Engineer as role
      expect(jester.getRole()).toBe("Engineer");
    })
  })