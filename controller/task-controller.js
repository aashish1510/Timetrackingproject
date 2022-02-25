const TaskModel = require("../model/task_model")
const taskSchema =require("../model/task_model")



module.exports.addTask = function(req,res){
    let taskname= req.body.taskname
    let discription = req.body.discription
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let utilisedhours = req.body.utilisedhours
    let totalhours = req.body.totalhours
    let project = req.body.project
    let module = req.body.module
    let status = req.body.status
    

    

    let task= new taskSchema({
        taskname:taskname,
        discription:discription,
        startdate:startdate,
        enddate:enddate,
        utilisedhours:utilisedhours,
        totalhours:totalhours,
        project:project,
        module:module,
        status:status

    })
    task.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"task added",
                status:200,
                data:success

            })
                
            
        }
    })

}    
module.exports.getAlltask =function(req,res){
    TaskModel.find().populate("project").populate("module").populate("status").exec(function(err,success){
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

module.exports.deleteTask=function(req,res){
    let taskid= req.params.taskid


    TaskModel.deleteOne({"_id":taskid},function(err,data){
        if(err){
            res.json({
                msg:"not deleted",
                statu:-1,
                data:err
            })
        }else{
            res.json({
                msg:"task deleted",
                status:200,
                data:data
            })
        }
    })
}


module.exports.updatetask= function(req,res){
    let taskid = req.body.taskid 
    let taskname = req.body.taskname 
    let startdate = req.body.startdate 
    let enddate = req.body.enddate 
    let utilisedhours = req.body.utilisedhours
    let totalhours = req.body.totalhours
    let project = req.body.project
    let module = req.body.module
    let status = req.body.status
    let discription=req.body.discription
    


       TaskModel.updateOne({_id:taskid},{taskname:taskname,startdate:startdate,enddate:enddate,utilisedhours:utilisedhours,totalhours:totalhours,project:project,module:module,status:status,discription:discription},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated!!!",status:200,data:data})
          
        }
    })
}
















