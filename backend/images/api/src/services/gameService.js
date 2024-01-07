const knex = require("knex")(require("../../knexfile").development);

/**
 * Get all games
 *
 * @returns {Promise<Array<Object>>} - Promise resolving to an array of games
 */
const getGames = async () => {
  return knex("games").orderBy("id").select("*");
};

/**
 * Get game by id
 *
 * @param {number} id - game id
 * @returns {Promise<Object>} - Promise resolving to a game
 */
const getGameById = async (id) => {
  return knex("games").where({ id }).first();
};

/**
 * Create game
 *
 * @param {Object} game - game data
 * @returns {Promise<Object>} - Promise resolving to the created game
 */
const createGame = async (game) => {
  return knex("games").insert(game).returning("*");
};

/**
 * Get game by name
 *
 * @param {string} name - game name
 * @returns {Promise<Object>} - Promise resolving to a game
 */
const getGameByName = async (name) => {
  return knex("games").where({ name }).first();
};

/**
 * Update game by id
 *
 * @param {number} id - game id
 * @param {Object} data - Data for the game to update
 * @returns {Promise<Object>} - Promise resolving to the updated game
 */
const updateGameById = async (id, data) => {
  return knex("games").where({ id }).update(data).returning("*");
};

/**
 * Delete game by id
 *
 * @param {number} id - game id
 * @returns {Promise<Object>} - Promise resolving to the deleted game
 */
const deleteGameById = async (id) => {
  return knex("games").where({ id }).del();
};

module.exports = {
  getGames,
  getGameById,
  createGame,
  getGameByName,
  updateGameById,
  deleteGameById,
};
