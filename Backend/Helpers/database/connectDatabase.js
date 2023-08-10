const mongoose = require("mongoose")
require("dotenv").config({path:"config.env"});

const connectDatabase =async  () => {
    
    await mongoose.connect("mongodb+srv://mufaddal1693:m1u6ff9i3@cluster-contentmanageme.yv3agqk.mongodb.net/" ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
