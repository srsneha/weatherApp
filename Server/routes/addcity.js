var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
// var Weather = require('../model/WeatherModel');
var Weather = require('../model/WModel');

var router = express.Router();

router.get('/city', function(req, res) {
    res.send("HELLO");
});

router.post('/city', function(req,res) {
    Weather.create(req.body, function(err, data) {
        if(err) {
            res.send("Error saving the city weather details!");
            console.log(err);
        }else {
            res.json(data);
        }
    });
})

module.exports = router;
