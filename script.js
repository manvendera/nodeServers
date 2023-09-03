const http = require('http');
const { url } = require('url');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
       res.write("<h1> hello world</h1>")
    }else if(req.url == '/about'){
        res.write("<h1>hello node js</h1>")
    }
    res.end();
})

server.listen(5001);
console.log('the http server is running on port 5000');
