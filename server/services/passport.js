var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user.js');

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },

  function(username, password, done) {
    User.findOne({
        username: username
      })
      .exec(function(err, user) {
        if (err) {
          done(err);
        }
        if (user) {
          if (User.validPassword(password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
        return done(null, false);
      });
  }));


//////////session////////////
passport.serializeUser(function(user, done) {
  done(null, User._id);
});
passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
