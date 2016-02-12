var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var team = Schema({
  img: { type: String },
  name: { type: String },
  bio: { type: String }
});


module.exports = mongoose.model('Team', team);
