const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require('./product.model')(mongoose);
db.cart = require('./cart.model')(mongoose);

module.exports = db;