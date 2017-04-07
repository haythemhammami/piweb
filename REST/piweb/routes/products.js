var express = require('express');
var router = express.Router();
var productModel = require('../models/product.model');
/*var moment = require('moment');
*/


router.post('/', function (req, res, next) {
    var product = new productModel(req.body);
    product.save(function (err, product) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(product);
        }
    });

});


router.get('/', function (req, res, next) {

    productModel.findAllProducts().then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    });

});


router.get('/:id', function (req, res, next) {

    var id = req.params.id;
    productModel.findById(id).exec(function (err, product) {
        if (err) {
            res.status(400).send(err);
        }
        if (!product) {
            res.status(404).send();
        }
        else {
            res.json(product);
        }
    });

});

router.delete('/:id', function (req, res, next) {

    var id = req.params.id;
    productModel.findByIdAndRemove(id, function (err, product) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.json();
        }
    });

});


router.put('/:id', function (req, res, next) {

    var id = req.params.id;


    productModel.updateProduct(id).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    })
});

module.exports = router;
