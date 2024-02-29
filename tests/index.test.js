const getDataTesing = require("./sections/data");
const testDatabase = require("./sections/db");
const testExpressApp = require("./sections/express");

// Test For Database
testDatabase();

// Test For Express
testExpressApp();

// Test for /subscribers
getDataTesing()




  