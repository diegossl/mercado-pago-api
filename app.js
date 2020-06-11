var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var gatewayRouter = require('./routes/gateway');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', gatewayRouter);

module.exports = app;
