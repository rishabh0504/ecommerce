const config = require('../config/config');
const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const User = Schema({
  username:  { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
  email:{ type: String, required: true},
  mobile:{ type: String, required: true}
});

User.pre('save',function(next){
	var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(config.salt_work_factor, function(err, salt) {
        if (err) throw err;
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) throw err;
            user.password = hash;
            next();
        });
    });
});


User.methods.comparePassword = function(candidatePassword, cb){
	 bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}
module.exports =  mongoose.model('User', User);