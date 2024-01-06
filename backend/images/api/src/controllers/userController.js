const bcrypt = require("bcryptjs");

const userService = require("../services/userService");

/**
 * Get all users
 *
 * @returns {Array.<Object>} - An array of users
 */
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.json({ users });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ err });
  }
};

/**
 * Get user by id
 *
 * @returns {Object} - A user
 */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

/**
 * Represents a user object
 *
 * @typedef {Object} User
 * @property {string} username.required - Username
 * @property {string} email.required - Email
 * @property {string} password.required - Password
 */

/**
 * Create user
 *
 * @param {Object} User - User data
 * @returns {Object} - The created user
 */
const createUser = async (req, res) => {
  try {
    // We need a username, email , password, createdAt, updatedAt
    const { username, email, password } = req.body;

    // Check if inputs are valid (dynamic validation)
    const requiredFields = ["username", "email", "password"];
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
      return res
        .status(400)
        .json({ err: `Missing required fields: ${missingFields.join(", ")}` });
    }

    // Validation goes here
    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      return res.status(409).json({ err: "User already exists" });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create user
    const user = await userService.createUser({
      username,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    res.json({ user });
  } catch (err) {
    console.log(`Error creating user: ${err}`);
    return res.status(500).json({ err });
  }
};

/**
 * Update user by id
 *
 * @param {number} id - user id
 * @returns {Object} - The updated user
 */
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    // Validation goes here
    // Check if user exists
    const userExists = await userService.getUserById(id);
    if (!userExists) {
      return res.status(404).json({ err: "User does not exist" });
    }

    // Check if user is authorized to update by checking if password matches
    const { password } = body;
    if (!password) {
      return res.status(401).json({ err: "Password required" });
    }

    const passwordMatches = bcrypt.compareSync(password, userExists.password);
    if (!passwordMatches) {
      return res.status(401).json({ err: "Unauthorized" });
    }

    // Rehash password because it is always passed along with the body
    body.password = bcrypt.hashSync(password, 10);

    // Update user
    const user = await userService.updateUserById(id, body);

    return res.json({ user });
  } catch (err) {
    console.log(`Error updating user: ${err}`);
    return res.status(500).json({ err });
  }
};

/**
 * Delete user by id
 *
 * @returns {Object} - The deleted user
 */
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if user exists
    const userExists = await userService.getUserById(id);
    if (!userExists) {
      return res.status(404).json({ err: "User does not exist" });
    }

    // Delete user
    const user = await userService.deleteUserById(id);

    return res.json({ user });
  } catch (err) {
    console.log(`Error deleting user: ${err}`);
    return res.status(500).json({ err });
  }
};

// exports
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
