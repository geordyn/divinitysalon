var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedback = Schema({
  name: { type: String },
  employee: { type: Schema.Types.ObjectId, ref: 'Team' },
  review: { type: String },
  stars: { type: Number }
});


module.exports = mongoose.model('feedback', feedback);
