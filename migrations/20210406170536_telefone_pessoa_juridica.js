
exports.up = function(knex) {
    return knex.schema.createTable('telefone_pessoa_juridica',function(table){
        table.increments('id').primary();
        table.string('numero_contato').notNullable();
        table.string('ddd').notNullable();
        table.string('descricao');
        table.integer('id_pessoa_juridica').notNullable();
        table.foreign('id_pessoa_juridica').references('pessoa_juridica.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('telefone_pessoa_juridica');
};