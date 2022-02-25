const mongoose=require("mongoose")
//schema
let projectmoduleSchema= new mongoose.Schema({
    modulename:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    estimatedhours:{
        type:Number
    },
    startdate:{
        type:String
    },
    enddate:{
        type:String
    },
    utilisedhours:{
        type:Number
    }
})

//module

let ProjectmoduleModel = mongoose.model("module",projectmoduleSchema)
module.exports= ProjectmoduleModel