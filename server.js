var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({
    resave: false, saveUninitialized: true,
    secret: 'shhh, dont tell anyone'
}));
