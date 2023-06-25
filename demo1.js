const fs=require("fs")
data=fs.readFile("ss.txt")
data=fs.readFileSync("sar.txt")

console.log(data.toString())

