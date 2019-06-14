let expect    = require("chai").expect;

const request = require('supertest');
const app = require('../app');

let jsonValidator = require('../util/jsonValidator');

describe("jsonValidator.validate", () => {
  it("must return an object with valid equal to true when you send a correct json", () => {
    let response = jsonValidator.validate("{\"user\":\"tom\"}");
    expect(response.valid).to.equal(true);
  });

  it("must return an object with valid equal to false  when you send an incorrect json", () => {
    let response = jsonValidator.validate("{\"user\" \"tom\"}");
    expect(response.valid).to.equal(false);
  });

});

describe("api", () => {
  it('responds with json with the key valid set to true when you send a valid JSON string', function () {
    request(app)
      .post('/validate-json')
      .send({"json": "{\"user\":\"tom\"}"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then(response => {
        //assert(response.body.valid, true)
        expect(response.body.valid).to.equal(true)
      })
  });

  it('responds with json with the key valid set to false when you send an invalid JSON string and json return must be nul', function () {
    request(app)
      .post('/validate-json')
      .send({"json": "{\"user\"\"tom\"}"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then(response => {
        //assert(response.body.valid, true)
        expect(response.body.valid).to.equal(false)
        expect(response.body.json).to.equal(null);
      })
  });
});
