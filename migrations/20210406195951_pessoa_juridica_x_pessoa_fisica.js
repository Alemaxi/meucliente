
exports.up = function(knex) {
    return knex.schema.createTable('pessoa_juridica_x_pessoa_fisica',function(table){
        table.increments('id').primary();
        table.integer('id_pessoa_juridica').notNullable();
        table.integer('id_pessoa_fisica').notNullable();
        table.foreign('id_pessoa_juridica').references('pessoa_juridica.id');
        table.foreign('id_pessoa_fisica').references('pessoa_fisica.id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pessoa_juridica_x_pessoa_fisica');
};