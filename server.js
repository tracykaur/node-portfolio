const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/about', require('./routes/about'));

app.set('view engine', 'pug');


// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
