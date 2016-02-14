var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;


var clock = Schema({
  employee: { type: Schema.Types.ObjectId, ref: 'Team' },
  name: { type: String },
  timeIn: { type: Date },
  timeOut: { type: String, default: "none" }
},{toObject:{virtuals:true},toJSON:{virtuals:true}});

clock.virtual('duration').get(function(){
 if (this.timeOut =="none"){
   return 0;
 }
 var ms = moment(this.timeOut).diff(moment(this.timeIn));
 var d = moment.duration(ms);
 var seconds = d.asSeconds();
  return seconds;
});
module.exports = mongoose.model('clock', clock);
