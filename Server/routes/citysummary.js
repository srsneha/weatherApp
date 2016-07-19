var express = require("express");
var router = express.Router();
var Weather = require('../model/WeatherModel');

router.get('/', function(req, res) {
    Weather.find({})
        .exec(function(err, data) {
        if(err) {
            res.send('Error fetching the weather details!');
            console.log(err);
        }else {
            res.json(data);
        }
    });
});

router.get('/city/:name', function(req, res) {
    var cityToFetch = req.params.name;
    Weather.find({
        'name': {$in: list}
    })
    .exec(function(err, data) {
        if(err) {
            res.send('Error fetching the data!');
            console.log(err);
        }else {
            console.log(data);
            // res.json(data);
        }
    });
});

module.exports = router;
