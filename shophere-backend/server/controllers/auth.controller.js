var User = require('../models/user.model');
var jwt = require('jsonwebtoken');
const config = require('../config/config');
const userconfig = require('../config/user.config');

module.exports.signup = (req, res) => {

    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.mobile = req.body.mobile;
    user.email = req.body.email;
    user.save((err, data) => {
        if (err) {
            if(err.code===11000){
                res.json({status : 400 ,message : "User already exist. Please use another username or login."});
            }else{
                res.json({status : 400 ,message : "Please try after some time."});
            }
        } else {
            res.json({status:200,
                'message': 'User registered successfully. Please login.'
            });
        }
    });
}


module.exports.login = (req, res) => {
    console.log(req.cookies.token);
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.json({status:403,
                'message': 'Invalid username or password.'
            });
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                if (!isMatch) {
                    res.json({
                        status :403,
                        'message': 'Invalid username or password.'
                    });
                } else {
                	let token=jwt.sign(user.password,config.secret_token);
                     user.password="";
                    const options = {
                        expires: 1000 * 60 * 1, // would expire after 15 minutes
                        httpOnly: true, // The cookie only accessible by the web server
                        signed: true, // Indicates if the cookie should be signed
                        token
                    }
                    res.json({status:200,user, token : options,contents:userconfig.privateContent});
                }
            });
        }
    })
}

