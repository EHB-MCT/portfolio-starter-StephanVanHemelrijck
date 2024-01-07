/**
 *  @fileOverview Helper functions for user related operations.
 *  @module helpers/userHelper
 */

/**
 *  This function checks if the User object contains all the required fields.
 *  @param {Object} user - The user object.
 *  @returns {boolean} - True if the user object contains all the required fields, false otherwise.
 */
const hasRequiredFields = (user) => {
  const requiredFields = ["username", "email", "password"];
  const missingFields = requiredFields.filter((field) => !user[field]);

  return missingFields.length === 0;
};

/**
 * This function validates whether the parameter is a string and has at least three characters.
 *
 * @param {string} input - The string to be validated
 * @returns {boolean} - True if the parameter is a string, false otherwise
 */
const inputIsValidString = (input) => {
  let isValid = false;

  // Check if input is a string and has at least three characters
  if (typeof input === "string" && input.length >= 3) {
    isValid = true;

    // Check if input only contains invisible characters (e.g. spaces)
    if (input.trim().length === 0) isValid = false;
  }

  return isValid;
};

/**
 *  This function validates if the given username exceeds the maximum length of 24 characters.
 *
 * @param {string} username - The string to be validated
 * @returns {boolean} - True if the string is shorter than the maximum length, false otherwise
 */
const usernameExceedsMaxLength = (username) => {
  return username.length <= 24;
};

/**
 * This function validates if the given email is a valid email address.
 *
 * @param {string} email - The email to be validated
 * @returns {boolean} - True if the email is valid, false otherwise
 */
const emailIsValid = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;

  return emailRegex.test(email);
};

module.exports = {
  hasRequiredFields,
  inputIsValidString,
  usernameExceedsMaxLength,
  emailIsValid,
};
