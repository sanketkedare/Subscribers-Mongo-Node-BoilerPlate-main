// SubscriberRoutes.js
// Which catches the requests on "/subscriber"

// Importing express and Schema
const express = require("express");
const Subscribers = require("../models/subscribers");

// Creting Router
const SubscriberRoute = express.Router();


// Getting All Subscribers from Database
// With a async function also using try-catch block

SubscriberRoute.get("/", async (req, res) => 
{
  // Try - catch block to catch exceptions
  try 
  {
    // Using mongo method find which returns result in the form of json
    // If data is successfully recieved will sent in form of array to client with status 200
    // In-case there is no data found return with massage and status 404
    const subscribers = await Subscribers.find({});
    setTimeout(() => {
      subscribers
        ? res.status(200).json(subscribers)
        : res.status(404).json({ Massage: "No data found" });
    }, 5000);
  } 

  // Catch exceptions
  // If there is an any kind of error happeend the it will be called
  // error massage will send in the form of json object with status code 500.
  catch (error) 
  {
    res.status(500).json({ Message: error.message });
  }
});



//  Getting Subcribers by Name
// With a async function also using try-catch block

SubscriberRoute.get("/name", async (req, res) => 
{
  // Try - catch block to catch exceptions
  try 
  {
    // Using mongo method find which returns result in the form of json
    // If data is successfully recieved will sent to client with status 200
    // Arguments in method will show name & subcribedChannel in the form of Array
    const subscribers = await Subscribers.find(
      {},
      { _id: 0, name: 1, subscribedChannel: 1 }
    );

    setTimeout(() => 
    {
      subscribers
        ? res.status(200).json(subscribers)
        : res.status(404).json({ Massage: "No data found" });
    }, 1000);
  } 
  
  // Catch exceptions
  // If there is an any kind of error happeend the it will be called
  // error massage will send in the form of json object with status code 500.
  catch (error) 
  {
    res.status(500).json({ Message: error.message });
  }
});




// Getting Subscriber by Id
// With a async function also using try-catch block

SubscriberRoute.get("/:id", async (req, res) => 
{

  // getting ID from url parameters
  const Id = req.params.id;

  // Try - catch block to catch exceptions
  try 
  {
    // Getting Details of Subscriber by Id, using methode findById
    // If data is not found it will retuen the subscriber with status code 200
    const subscriber = await Subscribers.findById(Id);

    setTimeout(() => 
    {
      subscriber && res.status(200).json(subscriber);
    }, 1000);
  }

  // Catch exceptions
  // If there is an any kind of error happeend the it will be called
  // error massage will send in the form of json object with status code 400.
   catch (error) 
   {
    res.status(400).json({
      Massage: `Data not found with Id : '${Id}'. Please, Enter Correct Id`,
    });
  }
});

//Exporting Route
module.exports = SubscriberRoute; 
