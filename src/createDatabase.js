const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");

    await refreshAll();

    console.log("Database refreshed successfully");
  } catch (error) {
    console.error("Error connecting to Database", error);
    throw error;
  }
};

const refreshAll = async () => {
  try {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);

    console.log("Data refreshed successfully");
  } catch (error) {
    console.error("Error refreshing data", error);
    throw error; // Rethrow the error to handle it at the caller level if needed
  }
};

module.exports = connectToDatabase;
