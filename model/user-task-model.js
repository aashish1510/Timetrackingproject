const mongoose =require("mongoose")

//schema

let usertaskSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }


})
//model
let UserTaskModel =mongoose.model("usertask",usertaskSchema)
module.exports= UserTaskModel