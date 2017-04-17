fs = require('fs');
module.exports.products = JSON.parse(fs.readFileSync('data/products.json'));
