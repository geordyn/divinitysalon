var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var team = Schema({
  img: { type: String },
  name: { type: String },
  bio: { type: String },
  payroll: { type: Schema.Types.ObjectId, ref: "payroll" }
});


module.exports = mongoose.model('Team', team);
