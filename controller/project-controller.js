const ProjectModel = require("../model/project-model")
const projectSchema = require("../model/project-model")


module.exports.addproject = function(req,res){
    let projectname = req.body.projectname
    let description = req.body.description
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let estimatedhours = req.body.estimatedhours
    let technology = req.body.technology

    let project = new projectSchema({
        projectname:projectname,
        description:description,
        startdate:startdate,
        enddate:enddate,
        estimatedhours:estimatedhours,
        technology:technology
    })

    project.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"project added successfully",
                status:200,
                data:success

            })  
        }
    })


}

module.exports.getAllprojects= function(req,res){
    ProjectModel.find(function(err,data){
        if(err){
            res.json({
                msg:"data not found",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data retrived ",
                status:200,
                data:data
            })
        }

    })
}
module.exports.deleteproject=function(req,res){
    let projectid= req.params.projectid


    ProjectModel.deleteOne({"_id":projectid},function(err,data){
        if(err){
            res.json({
                msg:"project not deleted",
                statu:-1,
                data:err
            })
        }else{
            res.json({
                msg:"project  deleted",
                status:200,
                data:data
            })
        }
    })
}

module.exports.updateproject=function(req,res){
    let projectid= req.body.projectid
    let projectname=req.body.projectname
    let description =req.body.description
    let  startdate=req.body.startdate
    let enddate =req.body.enddate
    let estimatedhours =req.body.estimatedhours
    let technology =req.body.technology
     
    ProjectModel.updateOne({_id:projectid},{projectname:projectname,description:description,startdate:startdate,enddate:enddate,estimatedhours:estimatedhours,technology:technology},function(err,data){
    if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"updated...",status:200,data:data})
    }
  })
}
