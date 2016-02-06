//////requirements//////
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');


//////files///////
var passport = require('./services/passport.js');
var productCtrl = require('./controllers/productCtrl.js');
var teamCtrl = require('./controllers/teamCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var clientCtrl = require('./controllers/clientCtrl.js');
var appointmentCtrl = require('./controllers/appointmentCtrl.js');




/////
var app = express();

var port = 2222;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

app.use(session({
    secret: 'ultimate-bro-jan-sucks-for-real-but-is-kewl-af',
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());



var mongoUri = 'mongodb://localhost:27017/serverproject';
mongoose.connect(mongoUri); //default port number to connect to mongoose
//second part says once you open connection one time, it'll consolelog
//you can put url in 'open' area
mongoose.connection.once('open', function(){
  console.log('successfully connected to mongodb');
});



//////////////Endpoints///////////////

//user//
app.post('/api/user', userCtrl.addUser); //makes new user
app.get('/api/user', userCtrl.getUser); //
app.get('/api/getCurrentUser', userCtrl.getCurrentUser);
//current user , goes to user controller, res.send(req.user) sends back current user
    //call endpoint in resolve

//login//
app.post('/api/login', passport.authenticate( 'local-auth', {
  successRedirect: '/api/getCurrentUser'
  }
));
//logout//
app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send("logged out");
});

//products//
app.post('/api/productAdmin', productCtrl.create); //posts new product
app.get('/api/products', productCtrl.retreive); //gets all products
app.put('/api/productAdmin/:id', productCtrl.update); //updates individual product
app.delete('/api/productAdmin/:id', productCtrl.remove); //deletes individual product

//team//
app.post('/api/teamAdmin', teamCtrl.create); //posts new team member (stylist)
app.get('/api/team', teamCtrl.retreive); //gets all team members
app.put('/api/teamAdmin/:id', teamCtrl.update); //updates individual team member
app.delete('/api/teamAdmin/:id', teamCtrl.remove); //deletes individual team member

//client//
app.post('/api/clientAdmin', clientCtrl.create); //posts new client
app.get('/api/clientAdmin', clientCtrl.retreive); //gets all clients
app.put('/api/clientAdmin/:id', clientCtrl.update); //updates individual client info
app.delete('/api/clientAdmin/:id', clientCtrl.remove); //deletes individual client

//appointments//
app.post('/api/aptAdmin', appointmentCtrl.addAppt); //posts new appointments
app.get('/api/aptAdmin', appointmentCtrl.retreive); //gets all appointments
app.put('/api/aptAdmin/:id', appointmentCtrl.update); //updates individual apt info
app.delete('/api/aptAdmin/:id', appointmentCtrl.remove); //deletes individual apt
app.get('/api/getMemberApts/:id', appointmentCtrl.getMemberApts);












app.listen(port, function() {
  console.log('now listening at port ' + port);
});
