const { response } = require("express")
const express = require("express")
const router = express.Router()
const Day = require(".././models/Day")


//Get all days
router.get("/", async (req, res) => {
    try{
        const days = await Day.find()
        res.status(201).json(days)
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

//Get all dates
router.get("/dates/all", async (req, res) => {
    try{
        const days = await Day.find()
        arr = []
        days.forEach(element => {
            arr.push(element.date)
        });
        res.status(201).json(arr)
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

//Get specific day
router.get("/:date", getDay, async (req, res) => {
    res.status(201).json(res.day)
})

//Get drinks from specific day
router.get("/:date/:drinks", getDay, async (req, res) => {
    const selectedDay = res.day
    try {
        res.status(201).json(selectedDay.drinks)
    } catch (err) {
        res.status(500).json({message: err.message})
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
        res.status(204).json(newDay)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})

//Create day from date
router.post("/:date", async (req, res) => {
    const day = new Day({
        drinks: req.body.drinks,
        date: req.params.date
    })
    try {
        const newDay = await day.save()
        res.status(204).json(newDay)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})



//delete day
router.delete("/:date", getDay, async (req, res) => {
    const selectedDay = res.day
    try {
        await selectedDay.remove()
        console.log(selectedDay)
        res.status(204).json(selectedDay)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//Add or remove drink from Day given date
router.patch("/:date/:addOrRemove", getDay, async (req, res) => {
    console.log("inside server")
    const selectedDay = res.day
    if (req.body !=  null){
        if (req.params.addOrRemove == "add"){
            selectedDay.drinks.push({
                time: req.body.time,
                beverage: req.body.beverage,
                volume: req.body.volume,
                unit: req.body.unit,
                percentage: req.body.percentage,
                color: req.body.color,
            })
        }
        if (req.params.addOrRemove == "remove"){
            selectedDay.drinks = selectedDay.drinks.filter(function (el) {return el.id != req.body.id})
        }

    }
    try{
        const updatedDay = await selectedDay.save()
        res.status(200).json(updatedDay)
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


