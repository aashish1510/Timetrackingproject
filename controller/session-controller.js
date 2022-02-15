const { application } = require("express")
const { append } = require("express/lib/response")
const fs= require("fs")
function login(req,res){
    res.write("login")
    res.end()

}


function signup(req,res){
      let signup= fs.readFileSync("./views/signup.html")

res.write(signup)
    res.end()
}    
function saveuser(req,res){
    
    console.log(req.body)
    res.write("data saved")
    res.end()
}
module.exports.login= login
module.exports.signup= signup
module.exports.saveuser= saveuser