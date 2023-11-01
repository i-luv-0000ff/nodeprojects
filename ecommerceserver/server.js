const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const port = 3000;
require('./routes/product.route')(app);
require('./routes/cart.route')(app);
app.use(cors());
const db = require('./model');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
})
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});