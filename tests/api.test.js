var expect  = require('chai').expect;
var request = require('request');

const app = require('../app');
let server; 

describe('REST API', function(done) {

  var germany = {
    name: "Germany",
    days: [{
      date: "01-01-2020",
      new_cases: 1,
      total_cases: 2,
      new_deaths: 1,
      total_deaths: 2
    }]
  }

  var france = {
    name: "France",
    days: [{
      date: "01-01-2020",
      new_cases: 1,
      total_cases: 2,
      new_deaths: 1,
      total_deaths: 2
    }]
  }

  before(done => {
    server = app.listen(3000, done);
  });

  it('should be able to get Germany', function(done) {
    request('http://localhost:3000/countries/Germany' , function(error, response) {
        jsonBody = JSON.parse(response.body)
        expect(jsonBody[0].name).to.equal('Germany');
        done();
    })
  })
})
  

