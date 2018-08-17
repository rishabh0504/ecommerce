
var Product = require('../models/product.model');
var User = require('../models/user.model');

module.exports.addProduct = ( req, res ) => {

	console.log(req.body);
		let product  = new Product();
		product.name = req.body.name;
		product.category = req.body.category;
		User.findOne({'username': req.headers['username']},(err,user)=>{
			if(err){
				res.json({"message":"You are not a valid user. Please login again."});
			}else{
				product.seller = user._id;
				var addedProduct ;
				product.save((err,savedProduct)=>{
					if(err)
						throw err;
					else
						addedProduct = savedProduct;
				});
				
			}
		});
}