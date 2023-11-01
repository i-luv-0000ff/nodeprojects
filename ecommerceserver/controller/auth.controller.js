const config = require('../config/auth.config');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signin = (req, res) => {
    const token = jwt.sign({ id: 123 }, config.secret, {
        expiresIn: 86400,
        algorithm: 'HS256'
    });
    res.status(200).send({
        id: 123,
        accessToken: token
    })
}