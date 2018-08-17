const authMiddleware = require('../middlewares/auth.middleware');
const express = require('express');
const productRouter = express.Router();
const productController= require('../controllers/product.controller');

productRouter.post('/',authMiddleware,productController.addProduct);



module.exports = productRouter;