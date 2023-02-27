var express = require('express')
var app = express()
var bodyParser = require('body-parser') //converte o body da requisição para vários formatos;
var aluno = require('./routes/aluno')


app.use(bodyParser.urlencoded()) //pegar os dados do body em form;

app.use('/aluno',aluno)

app.get('/', (req, res)=>{
    res.send('Hello World')
})


app.listen(3000, ()=> console.log('server rodando...'))