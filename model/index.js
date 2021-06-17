const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/Authenticate",{ useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(!error){
        console.log('succcess connected');
    }
    else{
        console.log('error connecting to database');
    }
});

const RandomValue=require("./randomValue.model");