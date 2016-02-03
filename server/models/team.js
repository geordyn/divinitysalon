var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var team = Schema({
  img: { type: String },
  name: { type: String },
  bio: { type: String },
  // services: {
  //   hairCare: Boolean,
  //   nailCare: Boolean,
  //   skinCare: Boolean,
  //   waxing: Boolean,
  //   tinting: Boolean
  //  },
});


module.exports = mongoose.model('Team', team);
