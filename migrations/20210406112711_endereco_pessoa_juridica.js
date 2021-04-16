
exports.up = function(knex) {
    return knex.schema.createTable('endereco_pessoa_juridica',function(table){
        table.increments('id').primary();
        table.string('descricao');
        table.string('complemento');
        table.string('nome_logradouro').notNullable().index();
        table.string('estado').notNullable();
        table.string('bairro').notNullable();
        table.string('cep').notNullable();
        table.string('cidade').notNullable();
        table.string('numero').notNullable();
        table.integer('id_pessoa_juridica').notNullable();
        table.foreign('id_pessoa_juridica').references('pessoa_juridica.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('userAddress');
};