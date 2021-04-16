
exports.up = function(knex) {
    return knex.schema.createTable('pessoa_fisica',function(table){
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.date('data_nascimento');
        table.string('cpf').notNullable().unique();
        table.string('rg').notNullable().unique();
        table.string('email');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pessoa_fisica');
};