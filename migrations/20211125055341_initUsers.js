
exports.up = async function(knex, Promise) {
    await knex.schema.createTable("users", table => {
        table.increments("user_id").unsigned().primary();
        table.string("email").unique().notNullable();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
    })
  
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("users");
};
