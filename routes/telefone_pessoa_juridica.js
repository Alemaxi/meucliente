const router = require('express').Router()

const modelTelefonePessoaJuridica = require('../model/telefone_pessoa_juridica');

router.get('/', (req,res) => {
    modelTelefonePessoaJuridica.todos().then(
        data => res.json(data)
    ).catch( err => console.log(err));
});


router.get('/:id', (req,res) => {
    modelTelefonePessoaJuridica.buscarId(req.params.id).then(
        data => res.json(data)
    ).catch(err => console.log(err));
});


router.post('/', (req,res) => {
    modelTelefonePessoaJuridica.inserir(req.body).then(
        data => res.json(data)
    ).catch( err => console.log(err));
});

router.put('/', (req,res) => {
    modelTelefonePessoaJuridica.atualizar(req.body).then(
        data => res.json(data)
        ).catch(err => console.log(err));
});

router.delete('/:id', (req,res) => {
    modelTelefonePessoaJuridica.delete(req.params.id).then(
        data => res.json(data)
    ).catch(err => console.log(err));
});


module.exports = router;