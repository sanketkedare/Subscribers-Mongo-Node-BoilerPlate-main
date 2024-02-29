const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../src/app");

chai.use(chaiHttp);
const expect = chai.expect;

const getDataTesing = () => 
{
  describe("SubscriberRoute", () => 
  {
   
    // it("should get all subscribers", async () => {
    //   const res = await chai.request(app).get("/subscribers");
    //   expect(res).to.have.statusCode;
    // });

    // it("should get subscribers by name", async () => {
    //   const res = await chai.request(app).get("/subscribers/name");
    //   expect(res).to.have.status(200);
    //   expect(res.body).to.be.an("array");
    // });

    it("should handle incorrect subscriber ID", async () => {
      const incorrectId = "255";
      const res = await chai.request(app).get(`/subscribers/${incorrectId}`);
      expect(res).to.have.status(400);
     
    });
  });
};

module.exports = getDataTesing;
