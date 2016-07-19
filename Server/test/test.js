var should = require('chai').should();
var supertest = require('supertest');
var app = require('../app.js');

var url = supertest('http://localhost:8080');

describe("[1] Suite to test: City Summary", function(err){
    it("Test case [1] for: GET '/'", function(done){
        url
            .get("/")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var cityList = JSON.parse(res.text);
                cityList.length.should.not.be.empty;
                done();
            })
    });
});

describe("[2] Suite to test: Add City Details", function(err){
    it("Test case [1] for: POST '/add/city'", function(done){
        url
            .post("/add/city")
            .send('Content-Type', /json/)
            .send({
                "city":"Campbell2",
                "country":"NZ",
                "temp":10,
                "tempMin":09,
                "tempMax":12,
                "wind":20,
                "clouds":30,
                "pressure":400,
                "longitude":20,
                "latitude":30
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                console.log(res.text);
                var cityAdded = JSON.parse(res.text);
                cityAdded.city.should.be.equal('Campbell2');
                done();
            })
    });
});
