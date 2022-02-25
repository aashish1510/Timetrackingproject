const req = require("express/lib/request")
const mongoose =require("mongoose")

//schema

let taskSchema = new mongoose.Schema({
   taskname:{  
    type:String,
    require:true
   },
   discription:{
    type:String
   },
   startdate:{
       type:String
   },
   enddate:{
       type:String
   },
   totalhours:{
       type:Number
   },
   utilisedhours:{
       type:String
   },
   project:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"project"
   },
  module:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"module"
  },
  status:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"status"
  } 
})

//model
let TaskModel = mongoose.model("task",taskSchema)
module.exports= TaskModel
