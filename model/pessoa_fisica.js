const configKnex = require('../knexfile');
const knex = require('knex')(configKnex);


exports.todos = async () => {
    return await knex('pessoa_fisica').select();
}

exports.buscarId = async (id) => {
    return await knex('pessoa_fisica').where({'id':id});
}

exports.inserir = async (novo) => {
    return await knex('pessoa_fisica').insert(novo);
}

exports.atualizar = async (atualizado) => {
    return await knex('pessoa_fisica').where({'id':atualizado.id}).update(atualizado);
}

exports.deletar = async (id) => {
    return await knex('pessoa_fisica').where({'id':id}).delete();
}