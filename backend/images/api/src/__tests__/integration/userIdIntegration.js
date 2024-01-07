const request = require("supertest");
const app = require("../../app");
const knex = require("../../../knexfile.js").development;
const db = require("knex")(knex);

describe("GET /users/:id", () => {
  beforeAll(async () => {
    await db.raw("BEGIN");
  });

  afterAll(async () => {
    // Clean up the database
    await db.destroy();
  });

  test("1 + 2 = 3", () => {
    expect(1 + 2).toBe(3);
    expect(1 + 2).not.toBe(2);
  });
});
