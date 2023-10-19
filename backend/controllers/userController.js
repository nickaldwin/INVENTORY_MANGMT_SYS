const express = require("express");

const registerUser = async(req, res) => {
    if(!req.email){
        
    }
    res.send("Register User")
}


module.exports = {
    registerUser,

};