const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")

//schema

let projectSchema = new mongoose.Schema({
    projectname:{
        type:String,
        require:true
    },
    description:{
        type:String,
        
    },
    startdate:{
        type:String,
        require:true

    },
    enddate:{
        type:String,
        require:true

    },
    estimatedhours:{
        type:Number,
        
    },
    technology:{
        type:String
    }
})

//model

let ProjectModel=mongoose.model("project",projectSchema)
module.exports= ProjectModel