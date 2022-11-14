const mongoose = require("mongoose")

const NightSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }

    

})

module.exports = mongoose.model("Night", NightSchema)