var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var payroll = Schema({
    employee: { type: Schema.Types.ObjectId, ref: "Team" },
    startDate: { type: Date },
    endDate: { type: Date },
    totalHrs: { type: Number }
});


module.exports = mongoose.model('currentPayroll', currentPayroll);
