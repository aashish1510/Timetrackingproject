

const express =require("express")
const mongoose =require("mongoose")
const sessioncontroller =require("./controller/session-controller")
const roleController =require("./controller/role-controller")
const usercontroller =require("./controller/user-controller")
const RoleModel = require("./model/role-model")
const ProjectController=require("./controller/project-controller")
const ProjectTeamController =require("./controller/project-team-controller")
const statusController =require("./controller/status-controller")
const projectmoduleController =require("./controller/project_module-controller")
const taskController = require("./controller/task-controller")
const usertaskController = require("./controller/user-task-controller")
const priorityController = require("./controller/priority_controller")

const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true }))

//database
 mongoose.connect('mongodb://localhost:27017/timetracking',function(err){
    if(err){
    console.log("data not connected");

    }
    else{
        console.log("data connected ");
    }
});


app.get("/",function(req,res){
    res.write("hiiii")
    res.end()
})

app.get("/login",sessioncontroller.login)
app.get("/signup",sessioncontroller.signup)
app.post("/saveuser",sessioncontroller.saveuser)
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)



app.post("/user",usercontroller.adduser)
app.get("/user",usercontroller.getAlluser)
app.delete("/user/:userid",usercontroller.deleteUser)
app.put("/user",usercontroller.updateuser)
app.post("/login",usercontroller.login)

//projet
app.post("/project",ProjectController.addproject)
app.get("/project",ProjectController.getAllprojects)
app.delete("/project/:projectid",ProjectController.deleteproject)
app.put("/project",ProjectController.updateproject)


//projectte
app.get("/projectteam",ProjectTeamController.getTeam)
app.post("/projectteam",ProjectTeamController.addTeam)
app.delete("/projectteam/:projectteamid",ProjectTeamController.deleteTeam)


//status
app.post("/status",statusController.addstatus)
app.get("/status",statusController.getAllstatus)
app.put("/status",statusController.updatestatus)
app.delete("/status/:statusid",statusController.deletestatus)

//module
app.post("/module",projectmoduleController.addmodule)
app.get("/module",projectmoduleController.getAllmodule)
app.delete("/module/:moduleid",projectmoduleController.deletemodule)
app.put("/module",projectmoduleController.updatemodule)

//task

app.post("/task",taskController.addTask)
app.get("/task",taskController.getAlltask)
app.put("/task",taskController.updatetask)
app.delete("/task",taskController.deleteTask)

// usertask

app.post("/usertask",usertaskController.addusertask)
app.get("/usertask",usertaskController.getAllusertask)
app.delete("/usertask/:usertaskid",usertaskController.deleteusertask)


app.post("/priority",priorityController.addPriority)
app.get("/priority",priorityController.getAllPriority)
app.put("/priority",priorityController.updatePriority)
app.delete("/priority:/PriorityId",priorityController.deletePriority)

app.listen(3000,function(){
    console.log("welcome to the server");
})

