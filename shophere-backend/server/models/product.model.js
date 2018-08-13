const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let Product = Schema({
  name    :  String,
  category : String

});

module.exports =  mongoose.model('Product', Product);