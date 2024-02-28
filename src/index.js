const express = require('express')
const app = require('./app.js')
const connectToDatabase = require('./createDatabase.js')
require("dotenv").config();


const port = process.env.PORT

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));



// Connect to the DATABASE
connectToDatabase() // Removed code redundancy by imorting the function below


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
