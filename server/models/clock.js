var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clock = Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Team' },
  name: { type: String },
  timeIn: { type: Date },
  timeOut: { type: String, default: "none" },
  duration: { type: String, default: "none" }
});


module.exports = mongoose.model('clock', clock);
