const confKnex = require('../knexfile');
const knex = require('knex')(confKnex);


exports.todos = async () => {
    return await knex('endereco_pessoa_juridica').select();
}

exports.buscarId = async (id) => {
    return await knex('endereco_pessoa_juridica').where({ 'id': id });
}

exports.inserir = async (novo) => {
    return await knex('endereco_pessoa_juridica').insert(novo);
}

exports.atualizar = async (atualizado) => {
    return await knex('endereco_pessoa_juridica').where({'id':atualizado.id}).update(atualizado);
}

exports.deletar = async (id) => {
    return await knex('endereco_pessoa_juridica').where({'id':id}).delete();
}