var Clock = require('./../models/clock.js');

module.exports = {


  clockIn: function(req, res) {
        // console.log('req.query: ', req.query);
        var clockIn = new Clock(req.body);
        clockIn.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

    /////save the last clockIn id to scope to reference for clock out!!!
    clockOut: function(req, res){
      Clock.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
        if(err){
          res.status(500).send(err);
        }
        else {
          // console.log('update ctrl');
          res.send(result);
        }
      });
    },

  getClock: function(req, res){
    Clock.find(req.query)
    .exec()
    .then(function(err, result){
      if(err){
        // console.log(err);
        res.send(err);
      }
      else {
        // console.log('get ctrl');
        res.send(result);
      }
    });
  },

  getMemberClock: function(req, res) {
    Clock.find({employee: req.params.id})
    .exec()
    .then(function(rating, err){
      if(err) {
        return console.error(err);
      } else {
        res.send(rating);
      }
    });
  },

  remove: function(req, res){
    Clock.findByIdAndRemove(req.params.id, function(err, result){
      if(err){
        res.status(500).send(err);
      }
      else{
        // console.log('remove ctrl');
        res.send(result);
      }
    });
  }



};
