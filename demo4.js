var http=require("http")
var url=require("url")

function processrequest(req,resp){
    var q=url.parse(req.url,true);
    console.log(q)

    resp.writeHeader(200,{"content-type":"text/html"})

    switch(q.pathname){
        case "/home":
            resp.write("<h1>Jay shri Ram</h1>")
            resp.end();
            break;

            case "/Shri":
                resp.write("<h1 style-color=orange>Jay shree Ganesh</h1>")
                resp.end();
                break;

                default:
                    resp.write("<h1>Akhandh Bharat</h1>")
                    break;
    }
}
var server=http.createServer(processrequest)

server.listen(8001,console.log("Your server is run on port 8001"))