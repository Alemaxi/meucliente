

//imports
const express = require('express');
const confKnex = require('./knexfile');
const modelPessoaJuridica =  require('./model/pessoa_juridica');

//incializações
const app = express();
const knex = require('knex')(confKnex);
const port = process.env.port || 3000;


app.use(express.json());


//routes
const routePessoaJuridica = require('./routes/pessoa_juridica');
const routeEnderecoPessoaJuridica = require('./routes/endereco_pessoa_juridica');
const routeTelefonePessoaJuridica = require('./routes/telefone_pessoa_juridica');
const routePessoaFisica = require('./routes/pessoa_fisica');


app.use('/pessoajuridica', routePessoaJuridica);
app.use('/enderecopessoajuridica', routeEnderecoPessoaJuridica);
app.use('/telefonepessoajuridica', routeTelefonePessoaJuridica);
app.use('/pessoafisica', routePessoaFisica);


app.use((req,res)=> {
    res.type("text");
    res.send("404 - endpoint não encontrado no servidor");
})

app.use((err,req,res,next)=>{
    res.type("text");
    res.send("500 - Erro no servidor")
})

app.listen(port,()=>{
    console.log(`servidor rodando na porta: ${port}`);
})