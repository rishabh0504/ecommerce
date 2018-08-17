/* express server configuration*/

const express = require('express');
const app = express();

/* Body parser configuration*/

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Body parser configuration*/

/* configurations */

const config = require('./server/config/config');
const dbConfig= require('./server/config/db.config');

/* configurations */

/* Logger */
const logs= require('./server/config/log.config');
const logger = logs.getLogger();
logger.level = 'debug'; 
/* Logger */

/* routes */

const userRoute = require('./server/routes/user.route'); 
const addProductRoute = require('./server/routes/product.route'); 
/* routes */


/*var Product = require('./server/models/product.model');*/



/*app.post('/products',(req,res)=>{
	console.log(req.body);
	let product  = new Product();
	product.name = req.body.name;
	product.category = req.body.category;
	
	product.save((err,data)=>{
		if(err)
			throw err;
		else
			res.json(data);
	})
});*/

app.use('/user/',userRoute);
app.use('/add/products',addProductRoute);

//app.use('/product/',appRoute);
/*app.use('/product/add',userRoute);*/



logger.info("Server started");
app.listen(config.port);