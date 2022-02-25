const mongoose=require("mongoose")

//schema
let projectteamSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
 project:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"project"
 }
})

//model
let ProjectTeamModel = mongoose.model("projectteam",projectteamSchema)
module.exports = ProjectTeamModel