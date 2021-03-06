const express = require('express');
const userRouter = express.Router();
const authController = require('../controllers/auth.controller'); 
userRouter.use(function(req, res, next) {
	if(!(req.body.username) || !(req.body.password)){
		res.json({'message':'Please provide the valid details'});
	}else{
		next();
	}
});


userRouter.post('/signup',authController.signup);
userRouter.post('/signin',authController.login);

module.exports = userRouter;
