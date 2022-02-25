const ProjectmoduleModel = require("../model/project_module.model")
const projectmoduleSchema =require("../model/project_module.model")




module.exports.addmodule =function(req,res){
    let modulename= req.body.modulename
    let project = req.body.project
    let estimatedhours = req.body.estimatedhours
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let utilisedhours = req.body.utilisedhours


    let module= new projectmoduleSchema({    
      modulename:modulename,
        project:project,
        estimatedhours:estimatedhours,
        startdate:startdate,
        enddate:enddate,
        utilisedhours:utilisedhours

    })
    module.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"module added",
                status:200,
                data:success

            })
                
            
        }
    })

}
module.exports.getAllmodule =function(req,res){
    
    ProjectmoduleModel.find().populate("project").exec(function(err,success){
        if(err){
            res.json({
                msg:"module not found",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"module retrived ",
                status:200,
                data:success
            })
        }
    })
}
module.exports.deletemodule=function(req,res){
    let moduleid= req.params.moduleid


    ProjectmoduleModel.deleteOne({"_id":moduleid},function(err,data){
        if(err){
            res.json({
                msg:"not deleted",
                statu:-1,
                data:err
            })
        }else{
            res.json({
                msg:"module deleted",
                status:200,
                data:data
            })
        }
    })
}


module.exports.updatemodule = function(req,res){
    let moduleid = req.body.moduleid 
    let modulename = req.body.modulename 
    let estimatedhours = req.body.estimatedhours 
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let utilisedhours = req.body.utilisedhours
    let project = req.body.project 
    


       ProjectmoduleModel.updateOne({_id:moduleid},{modulename:modulename,estimatedhours:estimatedhours,startdate:startdate,enddate:enddate,utilisedhours:utilisedhours,project:project},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}

