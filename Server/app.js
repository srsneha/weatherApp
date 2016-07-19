var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var citySummary = require('./routes/citysummary');
var addCity = require('./routes/addcity');

var app = express();

var db = 'mongodb://localhost/weatherBase';
mongoose.connect(db);

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../UI/dist')));

app.use('/', citySummary);
app.use('/add', addCity);

app.listen(8080, function() {
    console.log("Listening on 8080...");
})
