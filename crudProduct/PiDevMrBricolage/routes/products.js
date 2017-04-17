var express = require('express');
var router = express.Router();
var Product = require('../models/product.model');
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/images' })

router.get('/list', function (req, res, next) {
       console.log('hello')

   Product.find(function (err, products) {
        if (err) {
            console.error(err);
            return;
        }  
       res.render('allproducts',
            {
                products: products
            });
            
    })
});


router.get('/newproduct', function (req, res, next) {
 res.render('newproduct');
           
    });



router.post('/add', upload.any(),function (req, res, next) {
    new Product({ nom: req.body.nom , marque : req.body.marque ,prix: req.body.prix,image:req.files[0].filename })
        .save(function (err, doc) {
            res.redirect('allproducts');
        })
});

module.exports = router;

