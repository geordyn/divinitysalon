var Appointment = require('../models/appointment.js');

module.exports = {

  addAppt: function(req, res) {
    // console.log(req.body);
    var newAppt = new Appointment(req.body);
    newAppt.save(function(err, appointment) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(appointment);
      }
    });
  },

  retreive: function(req, res) {
    Appointment.find()
      .exec()
      .then(function(appointment, err) {
        if (err) {
          return console.error(err);
        } else {
          res.send(appointment);
        }
      });
  },

  getMemberApts: function(req, res) {
    Appointment.find({teamMember: req.params.id})
    .exec()
    .then(function(appointment, err){
      if(err) {
        return console.error(err);
      } else {
        res.send(appointment);
      }
    });
  },

	update: function(req, res) {
		Appointment.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
			if(err){
				res.status(500).send(err);
			}
			else {
				// console.log('update apptctrl');
				res.send(result);
			}
		});
	},
	remove: function(req, res) {
		Appointment.findByIdAndRemove(req.params.id, function(err, appointment) {
			if (err) {
				return console.error(err);
			} else {
				res.send(appointment);
			}
		});
	}



};
