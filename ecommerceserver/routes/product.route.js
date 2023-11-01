const {verifyToken} = require('../middlewares/authJwt');
module.exports = app => {
    const products = require('../controller/product.controller.js');
    var router = require('express').Router();
    // router.get('/', products.showAll);
    // router.post('/create', products.create);
    // router.put('/update', products.update);
    // app.use('/api/products', router);
    app.route('/api/products')
        .all(verifyToken)
        .get(products.showAll)
        .post(products.create)
        .put(products.update);
    // router.all('/api/products', verifyToken);
}