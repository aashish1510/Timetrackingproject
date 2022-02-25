
const UserModel = require("../model/user-model")
const userSchema =require("../model/user-model")
const bcrypt = require("bcrypt")


module.exports.adduser = function(req,res){
    let firstname= req.body.firstname
    let email = req.body.email
    let password = req.body.password

    let role = req.body.role

    let encpassword = bcrypt.hashSync(password,10)

    let user= new userSchema({
        firstname:firstname,
        email:email,
        password:encpassword,
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
    let password = req.body.password 
    


       UserModel.updateOne({_id:userid},{firstname:firstname,email:email,password:password,role:role},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"update successfully",status:200,data:data})
        }
    })
}


module.exports.login =function(req,res){
    let param_email= req.body.email
    let param_password=req.body.password

    let iscorrect= false

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans=bcrypt.compareSync(param_password,data.password)

            if(ans==true){
                iscorrect=true
            }
        }
       

        if(iscorrect==false){
            res.json({msg:"invalid crendentials",status:-1,data:req.body})
        }else{
            res.json({msg:"log in successfully",status:200,data:data})
        }


    })
    
    

}
































