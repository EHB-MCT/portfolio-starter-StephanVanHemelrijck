// const faker = require("faker");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(async () => {
      const users = [];
      const numUsers = 25; // Number of random users to generate

      // for (let i = 0; i < numUsers; i++) {
      //   users.push({
      //     username: faker.internet.userName(),
      //     password: faker.internet.password(),
      //     email: faker.internet.email(),
      //     created_at: faker.date.past(),
      //     updated_at: faker.date.recent(),
      //   });
      // }

      // Inserts seed entries
      return knex("users").insert(users);
    });
};
