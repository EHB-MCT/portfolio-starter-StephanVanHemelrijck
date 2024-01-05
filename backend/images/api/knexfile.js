/**
 * @type { Object.<string, import('knex').Knex.Config>}
 */

require("dotenv").config({ path: "../../cfg/.env.dev" });

const PG_CONNECTION_STRING = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@store:5432/${process.env.PG_DB}`;
// Connection string format: postgres://username:password@host:port/database
// host should be the name of the postgres service in the docker-compose file
// For seeding & migrations should use localhost instead of the service name
// TODO: Add a way so that migration and seeding can happen on store

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
