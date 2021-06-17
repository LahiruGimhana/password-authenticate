const mongoose = require("mongoose");

var RandomSchema = new mongoose.Schema({
    random_number : {
        type : String,
        required : "Required"
    }
});

mongoose.model("RandomValue", RandomSchema)