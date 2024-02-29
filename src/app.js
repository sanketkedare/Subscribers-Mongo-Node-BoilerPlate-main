const express = require("express");
const app = express();
const SubscriberRoute = require("./Controllers/SubscriberRoutes");

//Cheacking
const path = require("path");
const indexPath = path.join(__dirname, "../src/Client/index.html");

app.use("/subscribers", SubscriberRoute); 

app.get("/", (req, res) => {
  res.sendFile(indexPath);})

app.get("*", (req, res) => {
  console.log(req.params);
  res
    .status(400)
    .json("To get Information about Subscribers, please visit '/subscribers'");
});

module.exports = app;
