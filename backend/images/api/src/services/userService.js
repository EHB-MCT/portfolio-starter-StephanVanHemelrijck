const knex = require("knex")(require("../../knexfile").development);

/**
 * Get all users
 *
 * @returns {Promise<Array<Object>>} - Promise resolving to an array of users
 */
const getUsers = async () => {
  return knex("users").orderBy("id").select("*");
};

/**
 * Get user by id
 *
 * @param {number} id - user id
 * @return {Promise<Object>} - Promise resolving to a user
 */
const getUserById = async (id) => {
  return knex("users").select("*").where({ id }).first();
};

/**
 * Get user by email
 *
 * @param {string} email - user email
 * @return {Promise<Object>} - Promise resolving to a user
 */
const getUserByEmail = async (email) => {
  return knex("users").select("*").where({ email }).first();
};

/**
 * Create user
 * @param {Object} user - user data
 * @return {Promise<Object>} - Promise resolving to the created user
 */
const createUser = async (user) => {
  return knex("users").insert(user).returning("*");
};

/**
 * Update user by id
 *
 * @param {number} id - user id
 * @param {Object} body - user data
 * @return {Promise<Object>} - Promise resolving to the updated user
 */
const updateUserById = async (id, body) => {
  return knex("users").update(body).where({ id }).returning("*");
};

/**
 * Delete user by id
 *
 * @param {number} id - user id
 * @return {Promise<Object>} - Promise resolving to the deleted user
 */
const deleteUserById = async (id) => {
  return knex("users").del().where({ id }).returning("*");
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUserById,
  deleteUserById,
};
