const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()


//middlewares

app.use(express.json());
app.use(express.urlencoded());



//adding routes
app.get("/", (req, res) =>{
    res.send("Homepage")
})


//the port
const PORT = process.env.PORT || 5000;

//connect to db MONGODB

mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(PORT,() =>{
            console.log(`server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))