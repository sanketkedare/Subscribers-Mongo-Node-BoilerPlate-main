const chai = require("chai");
const app = require("../../src/app"); // Make sure to provide the correct path to your app file
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;

const testExpressApp = () => {
  describe("Your Express App", () => {
    it("should respond with a status code of 200 for the root path", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          if (err) {
            console.error(err);
            return done(err);
          }

          expect(res).to.have.status(200);
          expect(res.text).to.equal("Success");
          done();
        });
    });

    it("should respond with a status code of 400 for unknown paths", (done) => {
      chai
        .request(app)
        .get("/unknown")
        .end((err, res) => {
          if (err) {
            console.error(err);
            return done(err);
          }
          expect(res).to.have.status(400);
          done();
        });
    });
  });
};

module.exports = testExpressApp;
