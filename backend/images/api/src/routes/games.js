const express = require("express");
const router = express.Router();

const {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");

/**
 * GET /api/games
 *
 * @name Get All Games
 * @route {GET} /api/games
 * @returns {Array.<Object>} 200 - An array of games
 */
router.get("/", getGames);

/**
 * GET /api/games/:id
 *
 * @name Get Game By Id
 * @route {GET} /api/games/:id
 * @param {number} id.path.required - game id
 * @returns {Object} 200 - A game
 */
router.get("/:id", getGameById);

/**
 * POST /api/games
 *
 * @name Create Game
 * @route {POST} /api/games
 * @param {Object} body.body.required - game data
 * @returns {Object} 200 - The created game
 */
router.post("/", createGame);

/**
 * PUT /api/games/:id
 *
 * @name Update Game By Id
 * @route {PUT} /api/games/:id
 * @param {number} id.path.required - game id
 * @param {Object} body.body.required - game data
 * @returns {Object} 200 - The updated game
 */
router.put("/:id", updateGame);

/**
 * DELETE /api/games/:id
 *
 * @name Delete Game By Id
 * @route {DELETE} /api/games/:id
 * @param {number} id.path.required - game id
 * @returns {Object} 200 - The deleted game
 */
router.delete("/:id", deleteGame);

module.exports = router;
