var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://webdev2018:testtest3@ds117691.mlab.com:17691/heroku_wq6rt60n');

app.use(session({
    resave: false, saveUninitialized: true,
    secret: 'shhh, dont tell anyone'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.get('/', (req,res ) => res.json("Hello World!"));

require('./services/runner.service.server')(app);
require('./services/run.service.server')(app);
require('./services/team.service.server')(app);
require('./services/segment.service.server')(app);

app.listen(process.env.PORT || 4000);
