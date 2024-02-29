const express = require("express");
const app = express();
const SubscriberRoute = require("./Controllers/SubscriberRoutes");

app.get("/", (req, res) => {
  try {
    setTimeout(() => {
      res.status(200).send("Success");
    }, 500);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
});

app.use("/subscribers", SubscriberRoute);

app.get("*", (req, res) => {
  console.log(req.params);
  res
    .status(400)
    .json("To get Information about Subscribers, please visit '/subscribers'");
});

module.exports = app;
