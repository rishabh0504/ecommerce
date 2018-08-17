const express = require('express');
var jwt = require('jsonwebtoken');
const authMiddleware = express.Router();
const config = require('../config/config');

authMiddleware.use(function(req, res, next) {
	
	if(!req.headers['authorization']){
		res.json({"message":"User not authorized."});
	}else{
		var token = req.headers['authorization'].split(' ');
		jwt.verify(token[1], config.secret_token, (err, decoded)=> {
			if(err){
				res.json({"message":"User not authorized."});
			}else{
				next();
			}
		});
	}
});

module.exports = authMiddleware; 