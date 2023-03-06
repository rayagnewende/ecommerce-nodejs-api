const express = require('express'); 

const router = express.Router(); 
const Product = require('../models/Product'); 

router.get("/products", (req, res) => {
    res.status(200).json({
        success:true, 
        message:"liste des produits"
    });
}); 

router.post('/product/new', async  (req, res) => {

    const newProduct = await Product.create(req.body); 

    res.status(201).json({
        success:true, 
        newProduct
    }); 
})


module.exports = router; 