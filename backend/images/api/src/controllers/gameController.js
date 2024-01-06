const gameService = require("../services/gameService");

/**
 * Get all games
 *
 * @returns {Array.<Object>} - An array of games
 */
const getGames = async (req, res) => {
  try {
    const games = await gameService.getGames();
    return res.json({ games });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

/**
 * Get game by id
 *
 * @param {number} id - game id
 * @returns {Object} - A game
 */
const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await gameService.getGameById(id);
    return res.json({ game });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

/**
 * Represents a game object
 * @typedef {Object} Game
 * @property {string} name.required - Name
 * @property {string} description.required - Description
 * @property {string} image.required - Image thumbnail
 * @property {string} price.required - Price
 * @property {string} release_date.required - Release date
 * @property {string} developer.required - Developer
 */

/**
 * Create game
 *
 * @param {Object} Game - Game data
 * @returns {Object} - The created game
 */
const createGame = async (req, res) => {
  try {
    // Validation here
    const game = req.body;

    // Check if inputs are valid (dynamic validation)
    const requiredFields = [
      "name",
      "description",
      "image",
      "price",
      "release_date",
      "developer",
    ];
    const missingFields = requiredFields.filter((field) => !game[field]);
    if (missingFields.length) {
      return res.status(400).json({
        err: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Check if game already exists
    const existingGame = await gameService.getGameByName(game.name);
    if (existingGame) {
      return res
        .status(400)
        .json({ err: `Game with name ${game.name} already exists` });
    }

    // Create rating object (default values)
    const rating = {
      comment: "N/A",
      reviewers: 0,
    };

    const gameObject = {
      ...game,
      rating,
    };

    // Store in db
    await gameService.createGame(gameObject);

    return res.json({ gameObject });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

/**
 * Update game
 *
 * @param {number} id - Game data
 * @returns {Object} - The updated game
 */
const updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    // Validation goes here
    // Check if game exists
    const gameExists = await gameService.getGameById(id);
    if (!gameExists) {
      return res.status(404).json({ err: "Game not found" });
    }

    // Update game
    const game = await gameService.updateGameById(id, body);

    return res.json({ game });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};

/**
 * Delete game
 *
 * @param {number} id - Game data
 * @returns {Object} - The deleted game
 */
const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if game exists
    const gameExists = await gameService.getGameById(id);
    if (!gameExists) {
      return res.status(404).json({ err: "Game not found" });
    }

    // Delete game
    const game = await gameService.deleteGameById(id);

    return res.json({ game });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};

module.exports = {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
