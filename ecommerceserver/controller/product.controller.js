const db = require('../model');
const products = db.products;

exports.showAll = (req, res) => {
    const title = req.query.title;
    // var conditions = title ? { title: { $regex: title, $options: 'i' } } : {};
    products.find({})
        .then(products => {
            res.send(products);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
}

exports.create = (req, res) => {
    console.log(req);
    console.log(req.body);
    const product = new products(req.body);
    product.save()
        .then(product => {
            res.send(product);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the product."
            });
        });
}
exports.update = (req, res) => {
    console.log(req.query);
    const id = req.query.id;
    products.findByIdAndUpdate(id, req.body)
        .then(product => {
            res.send(product);
        })
}