/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("servers", function (table) {
    table.string("title").notNullable(); // Title column, not nullable
    table.text("description"); // Description column
    table.uuid("uid").notNullable().unique(); // UID column, not nullable and unique
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("servers");
};