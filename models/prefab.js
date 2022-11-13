const mongoose = require("mongoose")

const prefabSchema = new mongoose.Schema({
    beverage: {
        type: String,
        required: true
    },
    volume:{
        type: String,
        required: true
    },
    unit: {
        type: String,
        default: "l",
        required: true
    },
    percentage: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "#e8aa32",
        required: true
    }
})

module.exports = mongoose.model("Prefab", drinkSchema)