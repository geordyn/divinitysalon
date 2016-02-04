var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Appointment = new Schema({

	title: { type: String },
	start: { type: Date },
	end: { type: Date },
	client: { type: Schema.Types.ObjectId, ref: 'Client' },
	teamMember: { type: Schema.Types.ObjectId, ref: 'Team' },
	description: { type: String },

});


// Below is how MOMENT will combine the date and time to fit the calendar's format in the front end.
// $scope.submitAppt = function(appointment, date, time) {
// 	// appointmentService.addAppointmentById(appointment);
// 	appointment.start = new Date(date + ', ' + time);
// 	appointment.end = moment(appointment.start).add(appointment.end, 'm');
// 	appointmentsService.makeAppointment(appointment);
//
// };






module.exports = mongoose.model('Appointment', Appointment);
