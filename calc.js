

function add(a,b){
    c=a+b
    console.log(c);
}

function sub(a,b){
    c=a-b
    console.log(c);
}

function multi(a,b){
    c=a*b
    console.log(c);
}

module.exports.addition = add
module.exports.subtraction = sub
module.exports.multiplication = multi

