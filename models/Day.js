
const mongoose = require("mongoose")

const DaySchema = new mongoose.Schema({
    date: {
        type: String,
        default:    (new Date().getYear() + 1900).toString() + 
                    (new Date().getMonth() + 1).toString()  +
                    (new Date().getDate()).toString(),
        required: true
    },
    drinks: [{
        time: {type: String},
        beverage: {type: String},
        volume: {type: String},
        unit: {type: String},
        percentage: {type: String},
        color: {type: String},
    }]
})

module.exports = mongoose.model("Day", DaySchema)