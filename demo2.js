const fs=require("fs")
const data=fs.readFileSync("ss.txt")
fs.writeFile("ss.txt"," nothig is impossible beacuse Impossible world says i am possible",function(err){
    if(err){
        console.log("Error",err);
    }
    else{
        fs.readFile("ss.txt",function(err){
            if(err){
                console.log("Error Occured",err);
            }
            else{
                console.log(data.toString())
            }

        })
    }
})