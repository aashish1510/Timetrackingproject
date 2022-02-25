const ProjectTeamModel = require("../model/project-team-model")
const projectteamSchema=require("../model/project-team-model")


module.exports.addTeam = function(req,res){
    let user= req.body.user
    let project = req.body.project


    let team= new projectteamSchema({
        user:user,
        project:project,
       

    })
    team.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"user added",
                status:200,
                data:success

            })
                
            
        }
    })

}    
module.exports.getTeam = function(req,res){
    ProjectTeamModel.find({project:req.query.projectid}).populate("user").populate("project").exec(function(err,data){
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
module.exports.deleteTeam = function(req,res){
    let projectteamid= req.params.projectteamid


    ProjectTeamModel.deleteOne({"_id":projectteamid},function(err,data){
        if(err){
            res.json({
                msg:"project team not deleted",
                statu:-1,
                data:err
            })
        }else{
            res.json({
                msg:"project team  deleted",
                status:200,
                data:data
            })
        }
    })
}

