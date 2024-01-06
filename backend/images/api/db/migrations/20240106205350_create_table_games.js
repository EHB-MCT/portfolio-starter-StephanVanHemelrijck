/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("games", (table) => {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.string("image").notNullable();
    table.string("price").notNullable();
    table.json("rating").notNullable();
    table.string("release_date").notNullable();
    table.string("developer").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
