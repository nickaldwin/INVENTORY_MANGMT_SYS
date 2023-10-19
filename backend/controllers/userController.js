const express = require("express");

const registerUser = async(req, res) => {
    if(!req.email.body){
        res.status(400);
        throw new Error ("Please add email")
    }
    res.send("Register User")
}


module.exports = {
    registerUser,

};