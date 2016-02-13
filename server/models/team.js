var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var team = Schema({
  img: { type: String },
  name: { type: String },
  bio: { type: String },
  overallRating: { type: Number },
  totalHrs: { type: Number, default: 0 }
});


module.exports = mongoose.model('Team', team);
