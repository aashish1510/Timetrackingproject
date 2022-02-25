const ProjectModel = require("../model/project-model")
const statusModel = require("../model/status-model")
const statusSchema = require("../model/status-model")


module.exports.addstatus = function(req,res){
    let statusname= req.body.statusname
    let project = req.body.project

    

    

    let status= new statusSchema({
        statusname:statusname,
        project:project

    })
    status.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"status added",
                status:200,
                data:success

            })
                
            
        }
    })

}  
module.exports.getAllstatus =function(req,res){
    statusModel.find().populate("project").exec(function(err,success){
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
                data:success
            })
        }
    })
}

module.exports.updatestatus = function(req,res){
    let statusid = req.body.statusid 
    let statusname = req.body.statusname 
    let project = req.body.project
    

       statusModel.updateOne({_id:statusid},{statusname:statusname,project:project},function(err,data){
        if(err){
            res.json({
                msg:"Something went wrong!!!",
                status:-1,
                data:err
            })
        }
        else
        {
            res.json({
                msg:"updated...",
                status:200,
                data:req.body
            })
        }
    })
}
module.exports.deletestatus=function(req,res){
    let statusid= req.params.statusid


    statusModel.deleteOne({statusid:statusid},function(err,data){
        if(err){
            res.json({
                msg:"not deleted",
                statu:-1,
                data:err
            })
        }else{
            res.json({
                msg:"deta deleted",
                status:200,
                data:data
            })
        }
    })
}