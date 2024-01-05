const knex = require("knex")(require("../../knexfile").development);

const getUsers = async () => {
  return knex("users").select("*");
};

module.exports = {
  getUsers,
};
