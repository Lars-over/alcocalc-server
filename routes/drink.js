const { response } = require("express")
const express = require("express")
const router = express.Router()
const Drink = require("../models/Drink")

//Get all drinks
router.get("/", async (req, res) => {
    try{
        const drinks = await Drink.find()
        res.json(drinks)
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

//create drink
router.post("/", async (req, res) => {
    const drink = new Drink({
        time: req.body.name,
        beverage: req.body.beverage,
        volume: req.body.volume,
        unit: req.body.unit,
        percentage: req.body.percentage,
        color: req.body.color,
        nightId: req.body.nightId
    })

    try{
        const newDrink = await drink.save()
        res.status(201).json(newDrink)
    } catch (err){
        res.status(400).json({message : err.message})
    }

})

//delete drink
router.delete("/:id", async (rec, res) => {
    thisDrink = await Drink.findById(rec.params.id)
    try {
        await thisDrink.remove()
        res.status(202).json(thisDrink)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    
})




module.exports = router