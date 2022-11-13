const mongoose = require("mongoose")

const nightSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
})

module.exports = mongoose.model("Drink", drinkSchema)