/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users_participation", (table) => {
    table.increments("id").primary(); // auto-incrementing id + primary key
    table.integer("user_id").notNullable().references("id").inTable("users"); // user id foreign key
    table.date("date").notNullable(); // date of participation
    table.boolean("completed_today").defaultTo(false); // whether the user has completed their tasks for the day
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users_participation"); // drop the users_participation table
};
