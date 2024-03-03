// Shema for the collection in mongo database

// Importing Mongoose
const mongoose = require('mongoose');


// Creating Schema using mongoose library method "mongoose.Schema"
// With defining the datatype and required parameters
const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})


// Exporting Schema
// Creting Model using mongoose library method "mongoose.model"
// 3rd parameter inn model is for the name of existing model

module.exports = mongoose.model('Subscriber',susbcriberSchema,'Subscriber');