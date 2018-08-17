const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let Product = Schema({
  name    :  String,
  category : String,
  seller : { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports =  mongoose.model('Product', Product);