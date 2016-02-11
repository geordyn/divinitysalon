var Team = require('./../models/team');

module.exports = {


  create: function(req, res) {
        // console.log('req.query: ', req.query);
        var newTeam = new Team(req.body);
        newTeam.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

  retreive: function(req, res){
    Team.find({})
    .exec()
    .then(function(result){
        // console.log('get ctrl');
        res.send(result);
    });
  },

  update: function(req, res){
    Team.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
      if(err){
        res.status(500).send(err);
      }
      else {
        // console.log('update ctrl');
        res.send(result);
      }
    });
  },

  remove: function(req, res){
    Team.findByIdAndRemove(req.params.id, function(err, result){
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
