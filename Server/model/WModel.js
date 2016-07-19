var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WSchema = new Schema({
  message: String,
  cod: String,
  count: Number,
  list: [
    {
      id: Number,
      name: String,
      coord: {
        lon: Number,
        lat: Number
      },
      main: {
        temp: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        sea_level: Number,
        grnd_level: Number,
        humidity: Number
      },
      dt: Number,
      wind: {
        speed: Number,
        deg: Number
      },
      sys: {
        country: String
      },
      clouds: {
        all: Number
      },
      weather: [
        {
          id: Number,
          main: String,
          description: String,
          icon: String
        }
      ]
    }
  ]
});

module.exports = mongoose.model('WModel', WSchema);
