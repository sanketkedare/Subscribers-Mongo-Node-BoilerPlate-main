const express = require("express");
const app = express();
const SubscriberRoute = require("./Controllers/SubscriberRoutes");


app.use("/subscribers", SubscriberRoute); 

app.get("*", (req, res) => {
  console.log(req.params);
  res
    .status(400)
    .json("To get Information about Subscribers, please visit '/subscribers'");
});

module.exports = app;
