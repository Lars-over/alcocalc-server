const { response } = require("express")
const express = require("express")
const day = require("../models/Day")
const router = express.Router()
const Day = require("../models/Day")
const Drink = require("../models/Drink")


//Get all days
router.get("/", async (req, res) => {
    try{
        const days = await Day.find()
        res.json(days)
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

//Get drinks from specific day
router.get("/:year/:month/:dayOfMonth", async (req, res) => {
    try {
        const selectedDay = await Day.findOne({month: req.params.month, 
                                                dayOfMonth: req.params.dayOfMonth,
                                                year: req.params.year})
        res.json(selectedDay.drinks)
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log("ah shit")
    }

})


//Create day
router.post("/", async (req, res) => {
    const day = new Day({
        dayOfMonth: req.body.dayOfMonth,
        drinks: req.body.drinks,
        year: req.body.year,
        month: req.body.month,
    })
    try {
        const newDay = await day.save()
        res.status(201).json(newDay)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})

//Create day from date
router.post("/:year/:month/:dayOfMonth", async (req, res) => {
    const day = new Day({
        dayOfMonth: parseInt(req.params.dayOfMonth),
        drinks: req.body.drinks,
        year: parseInt(req.params.year),
        month: parseInt(req.params.year)})
    try {
        const newDay = await day.save()
        res.status(201).json(newDay)
        
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

//delete day
router.delete("/:id", async (req, res) => {
    thisDay = await Day.findById(req.params.id)
    try {
        await thisDay.remove()
        res.status(202).json(thisDay)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    
})



module.exports = router