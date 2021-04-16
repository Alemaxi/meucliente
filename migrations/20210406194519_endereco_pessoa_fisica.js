
exports.up = function(knex) {
    return knex.schema.createTable('endereco_pessoa_fisica',function(table){
        table.increments('id').primary();
        table.string('nome_logradouro').notNullable();
        table.string('descricao');
        table.string('complemento');
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable();
        table.integer('numero').notNullable();
        table.string('cep').notNullable();
        table.integer('id_pessoa_fisica').notNullable();
        table.foreign('id_pessoa_fisica').references('pessoa_fisica.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('endereco_pessoa_fisica');
};



let item = {
    
}
