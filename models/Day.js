
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
        time: {type: String, required: true},
        beverage: {type: String, required: true},
        volume: {type: String, required: true},
        unit: {type: String, required: true},
        percentage: {type: String, required: true},
        color: {type: String, required: true},
    }]
})

module.exports = mongoose.model("Day", DaySchema)