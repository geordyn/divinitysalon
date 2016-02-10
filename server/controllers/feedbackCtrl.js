var Feedback = require('./../models/feedback.js');

module.exports = {


  create: function(req, res) {
        // console.log('req.query: ', req.query);
        var newFeedback = new Feedback(req.body);
        newFeedback.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

  retreive: function(req, res){
    Feedback.find(req.query)
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

  update: function(req, res){
    Feedback.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
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
    Feedback.findByIdAndRemove(req.params.id, function(err, result){
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
