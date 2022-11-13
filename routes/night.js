const { response } = require("express")
const express = require("express")
const router = express.Router()
const Night = require("../models/night")

//Create night
router.post("/", async (req, res) => {
    const newNight = new Night({
        date: Date.now()
    })
    try {
        const newNight = await newNight.save()
        res.status(201).json(newNight)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})


module.exports = router