const { response } = require("express")
const express = require("express")
const router = express.Router()
const Prefab = require(".././models/prefab")


//Get all Prefabs
router.get("/", async (req, res) => {
    try{
        const prefabs = await Prefab.find()
        res.status(201).json(prefabs)
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
        res.status(204).json(newPrefab)
    } catch (err){
        res.status(400).json({message: err.message})
    }


})

//delete prefab
router.delete("/:id", getPrefab, async (req, res) => {
    console.log("----- delete with id")
    const selectedPrefab = res.prefab
    try {
        await selectedPrefab.remove()
        console.log(selectedPrefab)
        res.status(202).json(selectedPrefab)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//delete prefab
router.delete("/:beverage/:volume/:unit/:percentage/:color", getPrefab, async (req, res) => {
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
        prefab = await Prefab.findById(req.params.id)
        if (prefab == null){
            return res.status(404).json({message: "cannot find prefab"})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.prefab = prefab
    next()
}


module.exports = router
