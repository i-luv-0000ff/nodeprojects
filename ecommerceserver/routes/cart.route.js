module.exports = app => {
    const cart = require('../controller/cart.controller.js');
    var router = require('express').Router();
    router.get('/', cart.showAll);
    app.use('/api/cart', router);
}