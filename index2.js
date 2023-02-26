
var express = require('express')
var app = express()

let consoleMethod = (req, res, next)=>{
    var password = 123

    if(password === 123){
            next()
    }else{
        next('senha invalida')
    }
    
}


let hello = (req, res)=>{
    res.send('Hello World')
}

app.get('/',consoleMethod, hello) 

app.post('/',consoleMethod, hello )


app.listen(3000, ()=>console.log('server rodando... port 3000'))