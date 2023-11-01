const controller = require('../controller/auth.controller');
module.exports = app => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    app.post('/api/auth/signin', controller.signin);
}