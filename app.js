var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api', require('./api')); 

module.exports = app;

// Information about database
var uk_house_pricing_db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
}