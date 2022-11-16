const mongoose = require("mongoose")
const Drink = require("./Drink")

const DrinkSchema = new mongoose.Schema({
    time: {
        type: String,
        default: new Date().getHours.toString() + ":" +  new Date().getMinutes.toString(),
        required: true
    },
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

    },
})
module.exports = mongoose.model("Drink", DrinkSchema)