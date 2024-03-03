// Fuction for the connecting to the database


// Importing Mongoose library
const mongoose = require("mongoose"); 

// Schema for the Collection in Database
const subscriberModel = require("./models/subscribers");

// Subscribers Data 
const data = require("./data");

// Configuring evvironment variables
require("dotenv").config();


// Asynchronous function to create a connection to the database
const connectToDatabase = async () => 
{
  // Using try-catch block to handle exceptions
  try 
  {
    // Calling the database using monoose
    // waiting for the connection
    // Mongoose function with nessesory parameters
    // Database URL came from environment variables
    await mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true,useUnifiedTopology: true});


    // Ensuring here that the connection has been established by printing it on console 
    console.log("Connected to the database");


    // Calling the function to refresh data in collection
    await refreshAll();

  } 
  
  // In-case there is an error or connection not established It will caught exception in catch block
  catch (error) 
  {

    // Printing the error message
    console.error("Error connecting to Database", error);

    // Thowing an error
    throw error;
  }
};





// Asynchronous function for the refreshing data in collection from database
// This function will be called after the connection has been established successfully

const refreshAll = async () => 
{
  // Using try-catch block
  try 
  {
    // Performming actions using mongo methods 

    await subscriberModel.deleteMany({});    // Deleting privious records
    await subscriberModel.insertMany(data);  // Inserting new records

    // Printing after successful refresh
    console.log("Data refreshed successfully");

  } 

  // In-case there is an error, It will caught exception in catch block
  catch (error) 
  {
    // Printing the error message
    console.error("Error refreshing data", error);

    // Rethrow the error to handle it at the caller level if needed
    throw error; 
  }
};


// Exporting module : 
module.exports = connectToDatabase;
