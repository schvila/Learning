const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
});
// only for POST requests no GET
router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.send('<h1>Product2</h1>')
});

module.exports = router;
