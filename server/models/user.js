// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
// var Schema = mongoose.Schema;
//
// var User = Schema({
//
// 	  username: {type: String, required: true},
//     password: {type: String, required: true}
//
// });
//
// User.methods.generateHash = function( password ) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// User.methods.validatePassword = function( password ) {
// 	return bcrypt.compareSync(password, this.password);
// };
//
// module.exports = mongoose.model('User', User);
