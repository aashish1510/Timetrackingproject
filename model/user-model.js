const mongoose = require("mongoose")

//Schema
 let userSchema = new mongoose.Schema({
     firstname:{
         type:String,
         require:true

     },
     email:{
         type: String
         

     },
     password:{

        type: String
    },
     role:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"role"
     }
 })

 //model
 let UserModel= mongoose.model("user",userSchema)
 module.exports= UserModel