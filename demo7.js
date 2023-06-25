exports.square=function(n){
    return n*n;

}

exports.addition=function(n1,n2){
    return n1+n2;
}
exports.substraction=function(n1,n2){
    return n1-n2;

}

exports.multiplication=function(n1,n2){
    return n1*n2;

}

exports.sum=function(n){
    var sum=0;
    for(var i=0;i<=n;i++){ 
         sum=sum+i;
    }
    return sum;

}
