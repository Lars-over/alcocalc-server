const { response } = require("express")
const express = require("express")
const router = express.Router()
const Night = require("../models/Night")
const Drink = require("../models/Drink")


//Get all nights
router.get("/", async (req, res) => {
    try{
        const nights = await Night.find()
        res.json(nights)
    } catch (err){
        res.status(500).json({message: err.message})
    }

})


//Create night
router.post("/", async (req, res) => {
    const night = new Night({
        date: req.body.date
    })
    try {
        const newNight = await night.save()
        res.status(201).json(newNight)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})

//delete night
router.delete("/:id", async (rec, res) => {
    thisNight = await Night.findById(rec.params.id)
    try {
        await thisNight.remove()
        res.status(202).json(thisNight)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    
})



module.exports = router