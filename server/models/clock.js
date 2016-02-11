var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clock = Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Team' },
  name: { type: String },
  type: {
    in: { type: Boolean },
    out: { type: Boolean }
    },
    timeIn: { type: Date },
    timeOut: { type: Date },
  duration: { type: Number }
});


module.exports = mongoose.model('clock', clock);
