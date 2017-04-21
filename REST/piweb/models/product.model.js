

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    Nom:String,
	marque:String,
    prix: String,
    image: String
});

var product = module.exports = mongoose.model('products', productSchema);


module.exports.findAllProducts = function () {
    return new Promise(function (resolve, reject) {
        product.find({}, function (err, docs) {
            if (err) {
               reject(err);
            }
            resolve(docs); 
        });
    });
};

module.exports.updateProduct = function (id, objetToUpdate) {
    return new Promise(function (resolve, reject) {
        product.findByIdAndUpdate(id, {$set: objetToUpdate}, {new: true}, function (err, product) {
            if (err) {
                reject(err);
            }
            else {
                resolve(product);
            }

        });
    });
};