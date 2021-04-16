const express = require('express');
const route = express.Router();
const modelPessoaJuridica = require('../model/pessoa_juridica');


route.get('/', (req, res) => {
    modelPessoaJuridica.todos().then(
        data => res.json(data)
    ).catch(err => console.log(err));
});

route.get('/:id', (req, res) => {
    modelPessoaJuridica.buscarId(req.params.id).then(
        data => res.json(data)
    ).catch(err => console.log(err));
});

route.post('/', (req, res) => {
    modelPessoaJuridica.inserir(req.body).then(
        data => res.json(data)
    ).catch(err => console.log(err));
})

route.put('/', (req, res) => {
    modelPessoaJuridica.atualizar(req.body).then(
        data => res.json(data)
    ).catch(err => console.log(err));
});

route.delete('/:id', (req, res) => {
    modelPessoaJuridica.deletar(req.params.id).then(
        data => res.json(data)
    )
})



module.exports = route;