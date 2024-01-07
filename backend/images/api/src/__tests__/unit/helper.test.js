const {
  hasRequiredFields,
  inputIsValidString,
  usernameExceedsMaxLength,
  emailIsValid,
} = require("../../helpers/userHelper");

describe("hasRequiredFields", () => {
  test("returns true if the user object contains all the required fields", () => {
    // Create a user object without all the required fields
    const user1 = {
      username: "Jonathan",
    };
    const missingAnInput = hasRequiredFields(user1);
    expect(missingAnInput).toBe(false);

    // Create a user object with all the required fields
    const user2 = {
      username: "test",
      email: "test",
      password: "test",
    };
    const result = hasRequiredFields(user2);
    expect(result).toBe(true);

    // Create a user object with all the required fields but they're empty
    const user3 = {
      username: "",
      email: "",
      password: "",
    };
    const emptyFields = hasRequiredFields(user3);
    expect(emptyFields).toBe(false);
  });
});

describe("inputIsValidString", () => {
  // String is a string
  test("returns true if the parameter is a string", () => {
    const result = inputIsValidString("test");
    expect(result).toBe(true);
  });

  // String is not a string
  test("returns false if the parameter is not a string", () => {
    const result = inputIsValidString(1);
    expect(result).toBe(false);
  });

  // String is empty
  test("returns false if the parameter is an empty string", () => {
    const result = inputIsValidString("");
    expect(result).toBe(false);
  });

  // String is undefined
  test("returns false if the parameter is undefined", () => {
    const result = inputIsValidString(undefined);
    expect(result).toBe(false);
  });

  // String is null
  test("returns false if the parameter is null", () => {
    const result = inputIsValidString(null);
    expect(result).toBe(false);
  });

  // String is a string but has no visible characters (e.g. spaces) and is longer than 3 characters
  test("returns false if the parameter is a string but has no characters", () => {
    const result = inputIsValidString("                      ");
    expect(result).toBe(false);
  });

  // String is shorter than 3 characters
  test("returns false if the parameter is a string but has less than 3 characters", () => {
    const result = inputIsValidString("ab");
    expect(result).toBe(false);
  });
});

// Username exceeds max length of 24 characters
describe("usernameExceedsMaxLength", () => {
  test("returns true if the username is shorter than 24 characters", () => {
    const result = usernameExceedsMaxLength("test");
    expect(result).toBe(true);
  });

  test("returns false if the username is longer than 24 characters", () => {
    const result = usernameExceedsMaxLength(
      "askdjaskdjakwjkdjawkdjwkadjawkdjawkjdwkad"
    );
    expect(result).toBe(false);
  });
});

// Email is valid
describe("emailIsValid", () => {
  // Email has the correct format
  test("returns true if the email is valid", () => {
    const result = emailIsValid("example@outlook.com");
    expect(result).toBe(true);
  });

  // Email does not have the correct format
  test("returns false if the email is invalid", () => {
    const result = emailIsValid("exampleoutlook.com");
    expect(result).toBe(false);
  });

  // Email has the only one of the required characters (e.g. @)
  test("returns false if the email is invalid", () => {
    const result = emailIsValid("example@outlookcom");
    expect(result).toBe(false);
  });

  // Email has the only one of the required characters (e.g. .)
  test("returns false if the email is invalid", () => {
    const result = emailIsValid("exampleoutlook.com");
    expect(result).toBe(false);
  });

  // Email has a space
  test("returns false if the email is invalid", () => {
    const result = emailIsValid("example @outlook.com");
    expect(result).toBe(false);
  });
});
