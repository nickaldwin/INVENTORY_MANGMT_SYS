const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

const errorHaldlerS = require("./middleware/errorMiddleware");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());


const userRoutes = require("./routes/userRoutes")

//adding routes
app.get("/", (req, res) =>{
    res.send("Homepage")
});
//routes middleware

app.use("/api/users", userRoutes);

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
    .catch((err) => console.log(err));


    //error handler middleware
    app.use(errorHaldlerS);