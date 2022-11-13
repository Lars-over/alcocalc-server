const { response } = require("express")
const express = require("express")
const router = express.Router()
const Drink = require("../models/drink")

//get all drinks
router.get("/", async(req, res) => {
    try {
        const drinks = await Drink.find()
        res.json(drinks)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//get drinks for specific day
router.get("/:id", (req, res) => {
    res.send(req.params.id)
})

//create day
router.post("/", (req, res) => {

})

//add drink
router.patch("/", (req, res) => {

})

//delete day
router.delete("/:id", (req, res) => {

})
module.exports = router