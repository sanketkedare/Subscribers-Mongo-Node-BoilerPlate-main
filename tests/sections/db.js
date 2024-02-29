const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiAsPromised = require('chai-as-promised');
const mongoose = require("mongoose");
const subscriberModel = require("../../src/models/subscribers");
const connectToDatabase = require("../../src/createDatabase");
const data = require("../../src/data");

chai.use(chaiHttp);
chai.use(chaiAsPromised);

const expect = chai.expect;

const testDatabase = () => {
  describe("Database Connection and Refresh", () => {
    before(async () => {
      // Connect to the test database
      await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    });

    after(async () => {
      // Disconnect from the test database after all tests are done
      await mongoose.connection.close();
    });

    beforeEach(async () => {
      // Before each test, refresh the database with sample data
      await connectToDatabase();
    });

    afterEach(async () => {
      // After each test, delete all documents from the subscribers collection
      await subscriberModel.deleteMany({});
    });

    it("should connect to the test database and refresh data", async () => {
      // Test if connectToDatabase function connects successfully and refreshes data
      try {
        await connectToDatabase();
        const subscribersCount = await subscriberModel.countDocuments();
        expect(subscribersCount).to.equal(data.length);
      } catch (error) {
        throw error;
      }
    });

    it("should create a new subscriber", async () => {
      const subscriberData = {
        name: "John Doe",
        subscribedChannel: "Sample Channel",
      };

      const newSubscriber = new subscriberModel(subscriberData);
      const savedSubscriber = await newSubscriber.save();

      // Check if the savedSubscriber has the expected properties
      expect(savedSubscriber).to.have.property("name").to.equal("John Doe");
      expect(savedSubscriber)
        .to.have.property("subscribedChannel")
        .to.equal("Sample Channel");
      expect(savedSubscriber)
        .to.have.property("subscribedDate")
        .to.be.a("Date");
    });

    it("should not save a subscriber without required fields", async () => {
      const invalidSubscriber = new subscriberModel({});
      await expect(invalidSubscriber.save()).to.be.rejectedWith(mongoose.Error.ValidationError);
    });
    
  });
};

module.exports = testDatabase;
