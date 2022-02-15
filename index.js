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
const roleController =require("./controller/role")
const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true }))

//database
 mongoose.connect('mongodb://localhost:3000/timetracking',function(err){
    if(err){
    console.log("date not connected");

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
app.post("/addRole",roleController.addRole)

app.listen(3000,function(){
    console.log("welcome to the server");
})

