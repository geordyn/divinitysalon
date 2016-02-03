var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Appointment = new Schema({

	title: { type: String },
	startDT: { type: Date },
	endDT: { type: Date },
	client: { type: Schema.Types.ObjectId, ref: 'Client' },
	teamMember: { type: Schema.Types.ObjectId, ref: 'Team' },
	description: { type: String },

});

module.exports = mongoose.model('Appointment', Appointment);
