var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = Schema({
  brand: { type: String },
  img: { type: String },
  description: { type: String }
});


module.exports = mongoose.model('product', product);
