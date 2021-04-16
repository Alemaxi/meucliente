const express = require('express');
const router = express.Router();

const modelEnderecoPessoaJuridica = require('../model/endereco_pessoa_juridica');



router.get('/', (req,res) => {
    modelEnderecoPessoaJuridica.todos().then(
        data => res.json(data)
    ).catch(err => console.log(err));
})

router.get('/:id', (req,res) => {
    modelEnderecoPessoaJuridica.buscarId(req.params.id).then(
        data => res.json(data)
    ).catch(err => console.log(err));
})

router.post('/', (req,res) => {
    modelEnderecoPessoaJuridica.inserir(req.body).then(
        data => res.json(data)
    ).catch( err => console.log(err));
})

router.put('/', (req,res) => {
    modelEnderecoPessoaJuridica.atualizar(req.body).then(
        data => res.json('data')
    ).catch( err => console.log(err));
})

router.delete('/:id', (req,res) => {
    modelEnderecoPessoaJuridica.deletar(req.params.id).then(
        data => res.json(data)
    ).catch(err => console.log(err));
})

module.exports = router;