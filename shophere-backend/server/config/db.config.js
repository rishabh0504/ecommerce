const mongoose = require('mongoose');
const config = require('./config');
const logs= require('./log.config');
const logger = logs.getLogger();
logger.level = 'debug'; 

logger.info("Connecting to database.");
mongoose.connect(config.path,(err)=>{
	logger.error(err);
});
logger.info("Connected to database.");


module.exports = mongoose;