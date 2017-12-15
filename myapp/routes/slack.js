var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    var slack = require('./slack-node');
    console.log(slack);
});