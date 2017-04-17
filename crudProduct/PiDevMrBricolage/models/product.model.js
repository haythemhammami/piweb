var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    nom:String,
	marque:String,
    prix: String,
   image: String
});


module.exports =
mongoose.model('products',Product);