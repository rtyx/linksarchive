const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const chalk = require('chalk');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, function () {
    console.log(chalk.underline.green.bold('Listening on port 8080!'));
});
