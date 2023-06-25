exports.addition=function(n1,n2){
    return n1+n2;
}
const factorial=function(num){
    f=1;
    for(var i=1;i<=num;i++){
        f=f*i;
    }
    return f;

}

exports.permutation=function(n,r){
    var ans=factorial(n)/factorial(n-r)
    return ans;

}