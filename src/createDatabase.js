const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");
require("dotenv").config();


const connectToDatabase = () => 
{
  mongoose
    .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DATABASE"))
    .catch((err) => console.error("Error connecting to Database", err));
    refreshAll();

};

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  await subscriberModel.insertMany(data);
};


module.exports = connectToDatabase;