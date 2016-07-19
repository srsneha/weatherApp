var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weatherSchema = new Schema({
  city:  String,
  country: String,
  temp: Number,
  tempMin: Number,
  tempMax: Number,
  wind: Number,
  clouds: Number,
  pressure: Number,
  longitude: Number,
  latitude: Number
});

module.exports = mongoose.model('Weather', weatherSchema);
