const http=require("http")

var server=http.createServer(function(req,resp){
    console.log("method:",req.method,"url:",req.url)
    resp.writeHeader(200,{"Content-type":"text/html"})
    resp.write("<h1> Welcome to node js world</h1>")
    resp.end("<h1>Jay Shri Ram </h1>")
})
server.listen(8007,console.log("your server is start is on port 8007"))