var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clientSchema = Schema({
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  phone: { type: Number },
  email: { type: String }
});


module.exports = mongoose.model('Client', clientSchema);
