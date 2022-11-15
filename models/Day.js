
const mongoose = require("mongoose")

const DaySchema = new mongoose.Schema({
    month: {
        type: Number,
        default: new Date().getMonth() + 1,
        required: true
    },
    drinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "drink"
    }],
    dayOfMonth: {
        type: Number,
        default: new Date().getDate(),
        required: true
    },
    year: {
        type: Number,
        default: new Date().getYear() + 1900,
        required: true
    }

    

})

module.exports = mongoose.model("Day", DaySchema)