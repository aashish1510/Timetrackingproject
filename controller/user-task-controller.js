const UserTaskModel= require("../model/user-task-model")
const usertaskSchema = require("../model/user-task-model")

module.exports.addusertask = function(req,res){

    let user = req.body.user
    let task = req.body.task

    let usertask = new usertaskSchema({
        user:user,
        task:task

    })
    usertask.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"usertask added",
                status:200,
                data:req.body

            })
                
            
        }
    })

}    
module.exports.getAllusertask = function(req,res){
   UserTaskModel.find().populate("user").populate("task").exec(function(err,data){
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
module.exports.deleteusertask = function(req,res){
    let usertaskid= req.params.usertaskid


    UserTaskModel.deleteOne({"_id":usertaskid},function(err,data){
        if(err){
            res.json({
                msg:"user task not deleted",
                statu:-1,
                data:err
            })
        }else{
            res.json({
                msg:"user task  deleted",
                status:200,
                data:data
            })
        }
    })
}

module.exports.updateusertask = function(req,res){
    let usertaskid = req.body.usertaskid 
    let user = req.body.user 
    let task = req.body.task 
    
    


       UserTaskModel.updateOne({_id:usertaskid},{user:user,task:task},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"update successfully",status:200,data:data})
        }
    })
}


