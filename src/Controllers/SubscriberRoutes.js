const express = require("express");
const Subscribers = require("../models/subscribers");
const SubscriberRoute = express.Router();



//  Getting All Subscribers

SubscriberRoute.get("/", async (req, res) => {
  try {
    const subscribers = await Subscribers.find({});
    subscribers
      ? res.status(200).json(subscribers)
      : res.status(404).json({ Massage: "No data found" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
});



//  Getting Subcribers by Name

SubscriberRoute.get("/name", async (req, res) => {
  try {
    const subscribers = await Subscribers.find({},{_id:0,name:1,subscribedChannel:1});
    subscribers
      ? res.status(200).json(subscribers)
      : res.status(404).json({ Massage: "No data found" });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
});



//  Getting Subscriber by Id

SubscriberRoute.get("/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const subscriber = await Subscribers.findById(Id);
    subscriber && res.status(200).json(subscriber);
  } catch (error) {
    res
      .status(400)
      .json({
        Massage: `Data not found with Id : '${Id}'. Please, Enter Correct Id`,
      });
  }
});

module.exports = SubscriberRoute; //Exporting Route
