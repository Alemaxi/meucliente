const knex = require('knex')(require('../knexfile'));

let tabela = "telefone_pessoa_juridica"

exports.todos = async () => {
    return await knex(tabela).select();
}

exports.buscarId = async (id) => {
    return await knex(tabela).where({'id':id});
}

exports.inserir = async (novo) => {
    return await knex(tabela).insert(novo);
}

exports.atualizar = async (atualizado) => {
    return await knex(tabela).where({'id':atualizado.id}).update(atualizado);
}

exports.delete = async (id) => {
    return await knex(tabela).where({'id':id}).delete();
}