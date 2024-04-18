/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("countries", (table) => {
    table.increments("id").primary(); // auto-incrementing id + primary key
    table.string("name").notNullable().unique(); // unique country name
    table.string("capital").notNullable(); // capital city of the country
    table.string("flag").notNullable(); // url to the flag of the country
    table.text("description").notNullable(); // description of the country
    table.string("hint1"); // hint 1
    table.string("hint2"); // hint 2
    table.string("hint3"); // hint 3
    table.string("hint4"); // hint 4
    table.string("hint5"); // hint 5
    table.boolean("picked").defaultTo(false); // whether the country has been picked, once a country appears it won't appear again
    table.date("challenge_date"); // date of the challenge
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("countries"); // drop the countries table
};
