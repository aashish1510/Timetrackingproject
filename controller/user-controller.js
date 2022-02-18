
const UserModel = require("../model/user-model")
const userSchema =require("../model/user-model")

module.exports.adduser = function(req,res){
    let firstname= req.body.firstname
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user= new userSchema({
        firstname:firstname,
        email:email,
        password:password,
        role:role

    })
    user.save(function(err,success){
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
module.exports.getAlluser =function(req,res){
    UserModel.find().populate("role").exec(function(err,success){
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

module.exports.deleteUser=function(req,res){
    let userid= req.params.userid


    UserModel.deleteOne({"_id":userid},function(err,data){
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


module.exports.updateuser = function(req,res){
    let userid = req.body.userid 
    let firstname = req.body.firstname 
    let email = req.body.email 
    //let password = req.body.password 
    


       UserModel.updateOne({_id:userid},{firstname:firstname},{email:email},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}



































