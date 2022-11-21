require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to database"))

app.use(express.json())
const prefabRouter = require("../routes/prefab")
const dayRouter = require("../routes/day")
app.use("/prefab", prefabRouter)
app.use("/day", dayRouter)



app.listen(3000, () => console.log("Server started"))


const init = async () => {
    const data = await fetch("http://localhost:3000/day")
    const json = await data.json()
    const b1 = json[0] != null
    if (!b1) {

        //initialize days
        const api_url = "http://localhost:3000/day/"
        await fetch(api_url + "20221101", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221102", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221103", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221104", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221105", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221106", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221107", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221108", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221109", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221110", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221111", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221112", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221113", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221114", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221115", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221116", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221117", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221118", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221119", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221120", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221121", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221122", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221123", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221124", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221125", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221126", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221127", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221128", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221129", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221130", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221201", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221202", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221203", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221204", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221205", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221206", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221207", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221208", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221209", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221210", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221211", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221212", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221213", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221214", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221215", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221216", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221217", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221218", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221219", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221220", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221221", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221222", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221223", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221224", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221225", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221226", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221227", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221228", { method: "POST" }).catch((error) => { console.log("Error", error) })
        await fetch(api_url + "20221229", { method: "POST" }).catch((error) => { console.log("Error", error) })

        //initalize prefabs
        await fetch("http://localhost:3000/prefab",
            {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(
                    { "id": 1, "beverage": "Beer", "volume": "0.5", "unit": "l", "percentage": "4.7", "color": "#E8AA32" }
                )
            }
        ).catch((error) => { console.log("Error", error) })

        await fetch("http://localhost:3000/prefab",
            {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(
                    { "id": 6, "beverage": "Vodka Redbull", "volume": "0.5", "unit": "l", "percentage": "4.7", "color": "#DD72D9" }
                )
            }
        ).catch((error) => { console.log("Error", error) })

        await fetch("http://localhost:3000/prefab",
            {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(
                    { "id": 3, "beverage": "Wine", "volume": "2", "unit": "cl", "percentage": "11.5", "color": "#7a121f" },
                )
            }
        ).catch((error) => { console.log("Error", error) })

        await fetch("http://localhost:3000/prefab",
            {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(
                    { "id": 4, "beverage": "Shot", "volume": "45", "unit": "ml", "percentage": "40", "color": "#6635CE" },
                )
            }
        ).catch((error) => { console.log("Error", error) })

        await fetch("http://localhost:3000/prefab",
            {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(
                    { "id": 5, "beverage": "Cider", "volume": "0.5", "unit": "l", "percentage": "4.7", "color": "#127A6E" },
                )
            }
        ).catch((error) => { console.log("Error", error) })

        await fetch("http://localhost:3000/prefab",
            {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(
                    { "id": 2, "beverage": "Beer", "volume": "0.3", "unit": "l", "percentage": "4.7", "color": "#ee0" }
                )
            }
        ).catch((error) => { console.log("Error", error) })
    }


}
init()
