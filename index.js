// function add(){
   
//     let a=10
//     let b=20
//      let c=a+b
    
// }
// console.log(c);

// const calc=require("./calc")

// calc.addition(12,12)

// calc.subtraction(13,13)
// calc.multiplication(12,11)

const express =require("express")
const mongoose =require("mongoose")
const sessioncontroller =require("./controller/session-controller")
const roleController =require("./controller/role-controller")
const usercontroller =require("./controller/user-controller")
const RoleModel = require("./model/role-model")
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

app.listen(3000,function(){
    console.log("welcome to the server");
})

