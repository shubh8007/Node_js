const http=require("http")
const url=require("url")
const s=require("./demo7")
var server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})

    switch(q.pathname){
        case "/square":
        var f1=parseInt(s.square(5));
           resp.write(`<h2> Square:  ${f1} </h2>`);
          resp.end();
           break;

           case "/addition":
           var f2=parseInt(s.addition(10,2))
           resp.write(`<h2> Addition:  ${f2} </h2>`);
           resp.end();
           break;

           case "/substraction":
            var f3=parseInt(s.substraction(10,2))
            resp.write(`<h2> Addition:  ${f3} </h2>`);
            resp.end();
           break;

           case "/multiplication":
            var f4=parseInt(s.multiplication(10,2))
            resp.write(`<h2> multiplication:  ${f4} </h2>`);
            resp.end();
           break;

           case "/sum":
            var f5=parseInt(s.sum(10))
            resp.write(`<h2> multiplication:  ${f5} </h2>`);
            resp.end();
           break;
           
    }
})
server.listen(8009,console.log("your server is running on port 8009"))