const confKnex = require('../knexfile')
const knex = require('knex')(confKnex);


exports.todos = async () => {
    return await knex('pessoa_juridica').select();
}

exports.buscarId = async (id) => {
    return await knex('pessoa_juridica').where({id:id});
}

exports.inserir = async (Novo) => {
    return await knex('pessoa_juridica').insert(Novo);
}

exports.atualizar = async (atualizado) => {
    return await knex('pessoa_juridica').where({'id':atualizado.id}).update(atualizado)
}

exports.deletar = async (id) => {
    return await knex('pessoa_juridica').where({'id':id}).del();
}
