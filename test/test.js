require("dotenv").config()

const expect = require("chai").expect
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to database"))

app.use(express.json())
const mockDayRouter = require("./routes/mockDay")
app.use("/mockDay", mockDayRouter)



app.listen(3000, () => console.log("Server started"))


describe("Succesfull POST request", function() {
    it("Result should return 204", async function(){
        res =  await fetch("http://localhost:3000/mockDay/20221224",  {method: "POST"})
            .catch((error) => {console.log("Error", error)});
        expect(res.status).to.equal(204)
        })
    
    })




describe("Succesful GET request", function() {
        it("Result should return 201", async function(){
            res =  await fetch("http://localhost:3000/mockDay/20221224",  {method: "GET"})
                .catch((error) => {console.log("Error", error)});
            expect(res.status).to.equal(201)
            })
        
        })

describe("Unsuccesful GET request", function() {
    it("Result should return 404", async function(){
        res =  await fetch("http://localhost:3000/mockDay/20220404",  {method: "GET"})
            .catch((error) => {console.log("Error", error)});
        expect(res.status).to.equal(404)
        })
    
    })

describe("Successfull PATCH request", function() {
    it("Result should return 404", async function(){
        res =  await fetch("http://localhost:3000/mockDay/20221224/add",  {method: "PATCH", 
        body:{
            "time": "10:00",
            "beverage": "Shot", 
            "volume": "45",
            "unit": "ml", 
            "percentage": "40", 
            "color": "#6635CE" }})
            .catch((error) => {console.log("Error", error)});
        expect(res.status).to.equal(200)
        })
    })

describe("Unsuccessfull PATCH request", function() {
    it("Result should return 404", async function(){
        res =  await fetch("http://localhost:3000/mockDay/20220404/add",  {method: "PATCH", 
        body:{
            "time": "10:00",
            "beverage": "Shot", 
            "volume": "45",
            "unit": "ml", 
            "percentage": "40", 
            "color": "#6635CE" }})
            .catch((error) => {console.log("Error", error)});
        expect(res.status).to.equal(404)
        })
    })


describe("Successful DELETE request", function() {
    it("Result should return 404", async function(){
        res =  await fetch("http://localhost:3000/mockDay/20221224",  {method: "DELETE"})
            .catch((error) => {console.log("Error", error)});
        expect(res.status).to.equal(202)
        })
    
    })

    


