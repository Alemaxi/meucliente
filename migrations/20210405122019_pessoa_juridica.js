
exports.up = function(knex) {
    return knex.schema.createTable('pessoa_juridica',function(table){
        table.increments('id').primary();
        table.string('razao_social').notNullable();
        table.string('email').notNullable();
        table.string('nome_fantasia').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pesssoa_juridica');
};