module.exports = app => {
    const products = require('../controller/product.controller.js');
    var router = require('express').Router();
    router.get('/', products.showAll);
    router.post('/create', products.create);
    app.use('/api/products', router);
}