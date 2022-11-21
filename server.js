require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to database"))

app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started"))

const prefabRouter = require("./routes/prefab")
const dayRouter = require("./routes/day")
app.use("/prefab", prefabRouter)
app.use("/day", dayRouter)

