
const express = require('express');
const productRouter = express.Router();

productRouter.use(function(req, res, next) {


	console.log('productRouter it will be called first');

    next();
});
productRouter.post('/signup', (req,res) => {console.log(req.body);})


module.exports = productRouter;