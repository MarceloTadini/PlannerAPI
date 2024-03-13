const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    date: Date,
    participants: String
})

const Model = mongoose.model('plans', schema)

module.exports = Model