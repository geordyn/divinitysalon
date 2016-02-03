var Client = require('./../models/client.js');

module.exports = {


  create: function(req, res) {
        console.log('req.query: ', req.query);
        var newClient = new Client(req.body);
        newClient.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

  retreive: function(req, res){
    Client.find(req.query)
    .exec()
    .then(function(err, result){
      if(err){
        console.log(err);
        res.send(err);
      }
      else {
        console.log('get ctrl');
        res.send(result);
      }
    });
  },

  update: function(req, res){
    Client.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
      if(err){
        res.status(500).send(err);
      }
      else {
        console.log('update ctrl');
        res.send(result);
      }
    });
  },

  remove: function(req, res){
    Client.findByIdAndRemove(req.params.id, function(err, result){
      if(err){
        res.status(500).send(err);
      }
      else{
        console.log('remove ctrl');
        res.send(result);
      }
    });
  }



};
