const mongoose = require('mongoose')
const Schema = mongoose.Schema

const strategiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    army:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
    // When a new strategy is created, it is automatically time stamped
}, {timestamps: true})

// We first create a schema ^ then define a model based on that schema s
const Strategy = mongoose.model('Strategy', strategiesSchema)

module.exports = Strategy