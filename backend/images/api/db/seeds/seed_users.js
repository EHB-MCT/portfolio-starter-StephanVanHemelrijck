// const faker = require("faker");
const bcrypt = require("bcryptjs");

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

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash("password", salt);

      users.push({
        username: "Suezhoo",
        password: hash,
        email: "suezhoo@outlook.com",
        created_at: new Date(),
        updated_at: new Date(),
      });

      // Inserts seed entries
      return knex("users").insert(users);
    });
};
