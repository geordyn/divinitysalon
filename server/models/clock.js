var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clock = Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Team' },
  name: { type: String },
  timeIn: { type: Date },
  timeOut: { type: String },
  duration: { type: String }
});


module.exports = mongoose.model('clock', clock);
