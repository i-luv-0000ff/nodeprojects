const db = require('../model');
const cart = db.cart;

exports.showAll = (req, res) => {
    // const title = req.query.title;
    // var conditions = title ? { title: { $regex: title, $options: 'i' } } : {};
    cart.find({})
        .then(cart => {
            res.send(cart);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
}