module.exports.addRole=function(req,res){
    res.json({
        msg:"role added",
        status:200,
        data:req.body
    })
}