const { response } = require("express")
const express = require("express")
const router = express.Router()
const Prefab = require("../models/Prefab")


//Get all Prefabs
router.get("/", async (req, res) => {
    try{
        const prefabs = await Prefab.find()
        res.json(prefabs)
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

//Create Prefab
router.post("/", async (req, res) => {
    const prefab = new Prefab({
        beverage: req.body.beverage,
        volume: req.body.volume,
        unit: req.body.unit,
        percentage: req.body.percentage,
        color: req.body.color
    })
    try {
        const newPrefab = await prefab.save()
        res.status(201).json(newPrefab)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})

//delete day
router.delete("/:id", getPrefab, async (req, res) => {
    const selectedPrefab = res.prefab
    try {
        await selectedPrefab.remove()
        console.log(selectedPrefab)
        res.status(202).json(selectedPrefab)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getPrefab(req, res, next){
    let prefab
    try {
        prefab = await Prefab.findOne({id: req.params.id})
        if (prefab == null){
            return res.status(404).json({message: "cannot find day"})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.prefab = prefab
    next()
}


module.exports = router
