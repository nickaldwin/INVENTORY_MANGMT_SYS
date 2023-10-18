const  mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please add your name"],
    },

    email:{
        type: String,
        required: [true, "please add your email"],
        unique: true,
        trim: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
        ],       
    },
    password:{
        type: String,
        required: [true, "please add you password"],
        minlLength: [6, "password must be 6 char"],
        maxlLength: [23, "password must more than 23 char"],
    },
    
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema)

module.exports = User