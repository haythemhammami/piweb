var express = require('express');
var router = express.Router();
var pr = require('../data/products');
var productModel = require('../models/product.model');
var cheerio = require('cheerio');
const request = require('request');

router.get('/add',function(req,response){
    
var o = [
  {
    "url": "http://www.mr-bricolage.fr/electricite-et-domotique/tableau-electrique-2/interrupteur-et-disjoncteur-differentiel.html?magasin=Paris-11"
  }
];
var tav = Object.values(o);

for (i = 0; i < tav.length; i++) {
    console.log(tav[i].url);
    request(tav[i].url, function(err, res, body) {
        if (err) console.log('erro: ' + err);
        var $ = cheerio.load(body);
        var titles = [];
		var prixx = [];
		var product=[];
		
		var prix;
		var nom;
		var title;
		$('.regular-price-fiche').each(function() {
       		prix = $(this).find('.price').text().trim();
            console.log('prix :'+prix);
			prixx.push({
               "prix" : prix
            });
        });	
        $('div .content-product').each(function() {
            title = $(this).find('.marque').text().trim();
			nom = $(this).find('.nom').text().trim();
			console.log('nom :'+nom+' , marque '+title);
			
			titles.push({
                "marque": title,
				"Nom" : nom,
			});
		});
		for (i = 0; i < prixx.length; i++) {
			
			console.log('prix:'+prixx[i].prix);
			console.log('nom:'+titles[i].Nom);
			console.log('marque :'+titles[i].marque);
            var product = new productModel({
                "marque": titles[i].marque,
				"Nom" : titles[i].Nom,
				"prix": prixx[i].prix
			});
        product.save();
		}

        fs.appendFile('data/LesMarques2Final.json', JSON.stringify(product));
        response.send('ok');

       
}); 

}
});
/*
router.get('/adddb',function (req,res,next){
    var product = new productModel(pr.products);
    product.save(function (err, product) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(pr.products);
        }
    });

           });
           */

router.get('/:id',function (req,res,next){
        var id = req.params.id;
         res.json(pr.products[id]);
           });

module.exports = router;
