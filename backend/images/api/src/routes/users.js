const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
} = require("../controllers/userController");

/**
 * GET /api/users
 *
 * @name Get All Users
 * @route {GET} /api/users
 * @returns {Array.<Object>} 200 - An array of users
 */
router.get("/", getUsers);

/**
 * GET /api/users/:id
 *
 * @name Get User By Id
 * @route {GET} /api/users/:id
 * @param {number} id.path.required - user id
 * @returns {Object} 200 - A user
 */
router.get("/:id", getUserById);

/**
 * POST /api/users
 *
 * @name Create User
 * @route {POST} /api/users
 * @param {Object} body.body.required - user data
 * @returns {Object} 200 - The created user
 */
router.post("/", createUser);

/**
 * PUT /api/users/:id
 *
 * @name Update User By Id
 * @route {PUT} /api/users/:id
 * @param {number} id.path.required - user id
 * @param {Object} body.body.required - user data
 * @returns {Object} 200 - The updated user
 */
router.put("/:id", updateUserById);

/**
 * DELETE /api/users/:id
 *
 * @name Delete User By Id
 * @route {DELETE} /api/users/:id
 * @param {number} id.path.required - user id
 * @returns {Object} 200 - The deleted user
 */
router.delete("/:id", deleteUserById);

module.exports = router;
