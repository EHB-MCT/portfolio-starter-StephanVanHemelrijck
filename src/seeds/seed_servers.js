const faker = require("faker");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries in the 'servers' table
  return knex("servers")
    .del()
    .then(function () {
      // Inserts seed entries
      const seedData = [];

      // Define the number of records you want to insert
      const numberOfRecords = 10; // Adjust as needed

      for (let i = 0; i < numberOfRecords; i++) {
        seedData.push({
          title: faker.company.companyName(), // Generate a random title
          description: faker.lorem.sentence(), // Generate a random description
          uid: faker.datatype.uuid(), // Generate a random UUID
        });
      }

      return knex("servers").insert(seedData);
    });
};
