var Product = require('./../models/product');

module.exports = {


  create: function(req, res) {
        // console.log('req.query: ', req.query);
        var newProduct = new Product(req.body);
        newProduct.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

  retreive: function(req, res){
    Product.find(req.query)
    .exec()
    .then(function(err, result){
      if(err){
        console.log(err);
        res.send(err);
      }
      else {
        // console.log('get ctrl');
        res.send(result);
      }
    });
  },

  update: function(req, res){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, result){
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
    Product.findByIdAndRemove(req.params.id, function(err, result){
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
