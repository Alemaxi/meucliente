const express = require('express');
const router = express.Router();

const pessoaFisicaModel =  require('../model/pessoa_fisica');


router.get('/', (req,res)=>{
    pessoaFisicaModel.todos().then(
        data => {
            res.json(data);
        }
    ).catch(
        err => {
            console.log(err);
        }
    )
});


router.get('/:id', (req,res) => {
    pessoaFisicaModel.buscarId(req.params.id).then(
        data => {
            res.json(data);
        }
    ).catch(err => console.log(err));
})

router.post('/', (req,res) => {
    pessoaFisicaModel.inserir(req.body).then(
        data => res.json(data)
    ).catch(err => res.json(err));
});

router.put('/', (req,res) => {
    pessoaFisicaModel.atualizar(req.body).then(
        data => res.json(data)
    ).catch(err => console.log(err));
})

router.delete('/:id', (req,res) => {
    pessoaFisicaModel.deletar(req.params.id).then(
        data => res.json(data)
    ).catch(err => console.log(err));
})


module.exports = router;