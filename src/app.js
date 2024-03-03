// app.js 

// Creating the server here
// Able to handel request to the server

// Defining the server
const express = require("express");
const app = express();

// Importing subscriber routes from 'SubscriberRoutes.js'
const SubscriberRoute = require("./Controllers/SubscriberRoutes");



// After hitting URL "/" following handeller will call
// which reciving request and sending response to the client
// handeller using 'Get' method
app.get("/", (req, res) => 
{
  // Using try-catch to catch exceptions
  try 
  {
    // Setting the Timeout for the request
    // Sending the response to the client in json with status code 200
    setTimeout(() => {
      res.status(200).json({"Msssage": "To get information about subscribers visit '/subscribers' "});
    }, 500);

  } 

  // Handelling Error 
  catch (error) 
  {
    console.error(error);
    res.status(400).send("Error");
  }
});


// Using "SubscriberRoutes" for the request on "/subscribers"
app.use("/subscribers", SubscriberRoute);


// Any wrong URL will cought here which is not defined in configuration
app.get("*", (req, res) => 
{
  console.log(req.params);

  // Sending response with status code 400 
  res
    .status(400)
    .json("To get Information about Subscribers, please visit '/subscribers'");
});


// Exporting server "app"
module.exports = app;
