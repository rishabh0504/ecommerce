var User = require('../models/user.model');
var jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports.signup = (req, res) => {

    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.mobile = req.body.mobile;
    user.email = req.body.email;
    User.find()
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err))
    user.save((err, data) => {
        if (err) {
            if(err.code===11000){
                res.json({status : 409 ,message : "User already exist"});
            }else{
                res.json({status : 500 ,message : "Please try after some time."});    
            }
        } else {
            res.json({status:200,
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
                	let token=jwt.sign(user.password,config.secret_token);
                     user.password="";
                    res.json({user : user,token:token});
                }
            });
        }
    })
}

