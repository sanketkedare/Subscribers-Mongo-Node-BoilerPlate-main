// Entry Point for the application


// Configuration for the server
const express = require('express')
const app = require('./app.js')     


// Connecting to the database here by importing function
const connectToDatabase = require('./createDatabase.js') 


// Confugration for environment variables 
require("dotenv").config();


// Server is listening on port which defined in "environment variables" or "3001"
const port = process.env.PORT || 3001


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Connect to the DATABASE
// Removed code redundancy by imorting the function below
connectToDatabase() 


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
