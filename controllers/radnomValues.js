const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const RandomValueModel=mongoose.model("RandomValue")

router.get("/", (req, res)=>{
    // res.send('Random value Controller');

    var randomvalue=new RandomValueModel();
    randomvalue.random_number="1543644sgsgsgsgs - this is random value";
    randomvalue.save();

    RandomValueModel.find((err, docs)=>{
        if(!err)
        {
            console.log(docs);
            res.send("Random Values Controller")
        }
        else{
            res.send("Error");
        }
    })
});

module.exports=router;