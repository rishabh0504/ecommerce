var User = require('../models/user.model');
var jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports.signup = (req, res) => {

    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save((err, data) => {
        if (err) {
            res.json({
                'message': 'User name already exist.'
            });
        } else {
            res.json({
                'message': 'User registered successfully. Please login again.'
            });
        }
    });
}


module.exports.login = (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.json({
                'message': 'User Does not exist.'
            });
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                if (!isMatch) {
                    res.json({
                        'message': 'Password not matched.'
                    });
                } else {
                	var token=jwt.sign(user.password,config.secret_token);
                    res.json({user : {username:user.username},token:token});
                }
            });
        }
    })
}

