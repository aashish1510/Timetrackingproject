const mongoose = require("mongoose")
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
 let UserModel= mongoose.model("user",userSchema)
 module.exports= UserModel