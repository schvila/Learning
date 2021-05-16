const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type = "text" name="title"><button type="submit">Add Product</button></form>')
});
// only for POST requests no GET
router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.send('<h1>Product2</h1>')
});

module.exports = router;
