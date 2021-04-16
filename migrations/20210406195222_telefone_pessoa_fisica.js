
exports.up = function(knex) {
    return knex.schema.createTable('telefone_pessoa_fisica',function(table){
        table.increments('id').primary();
        table.integer('ddd')
        table.string('numero_contato').notNullable();
        table.string('descricao').notNullable();
        table.integer('id_pessoa_fisica').notNullable();
        table.foreign('id_pessoa_fisica').references('pessoa_fisica.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('telefone_pessoa_fisica');
};
