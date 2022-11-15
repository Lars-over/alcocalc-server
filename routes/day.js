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

//Get specific day
router.get("/:date", getDay, async (req, res) => {
    res.json(res.day)
})

//Get drinks from specific day
router.get("/:date/:drinks", getDay, async (req, res) => {
    const selectedDay = res.day
    try {
        res.json(selectedDay.drinks)
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log("ah shit")
    }
})


//Create day
router.post("/", async (req, res) => {
    const day = new Day({
        drinks: req.body.drinks,
        date: req.body.date
    })
    try {
        const newDay = await day.save()
        res.status(201).json(newDay)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})


/*
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
*/
//Add drink to Day from date
router.patch("/:date/:addOrRemove", getDay, async (req, res) => {
    const selectedDay = res.day
    if (req.body !=  null){
        console.log("aah")
        if (req.params.addOrRemove == "add"){
            selectedDay.drinks.push(req.body)
        }
        if (req.params.addOrRemove == "remove"){
            selectedDay.drinks = selectedDay.drinks.filter(function (el) {return el.id != req.body.id})
        }

    }
    try{
        const updatedDay = await selectedDay.save()
        res.json(updatedDay)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
 
})

async function getDay(req, res, next){
    let day
    try {
        day = await Day.findOne({date: req.params.date})
        if (day == null){
            return res.status(404).json({message: "cannot find day"})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.day = day
    next()
}

module.exports = router