const express = require('express');

const { Console } = require('console');

const app = express();

//more specific first '/product' preccedess '/'.
app.use('/product',(req, res, next)=>{
    console.log('product2')
    res.send('<h1>Product2</h1>')
});
app.use('/',(req, res, next)=>{
    console.log('root')
    res.send('<h1>Root</h1>')
});

app.listen(5000);