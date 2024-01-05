const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/userController");

/**
 * GET /api/users
 *
 * @name Get All Users
 * @route {GET} /api/users
 * @returns {Array.<Object>} 200 - An array of users
 */
router.get("/", getUsers);

module.exports = router;
