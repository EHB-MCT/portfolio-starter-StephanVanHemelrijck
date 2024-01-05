/**
 * @type { Object.<string, import('knex').Knex.Config>}
 */

require("dotenv").config({ path: "../../cfg/.env.dev" });

const PG_CONNECTION_STRING = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@store:5432/${process.env.PG_DB}`;

module.exports = {
  development: {
    client: "postgresql",
    connection: PG_CONNECTION_STRING,
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
