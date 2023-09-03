// const http = require("http");
// const PORT = 5000;
// const HOSTNAME = " localhost";
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader;
//   {
//     "Content-Type", "text/plain";
//   }
//   res.end("<h1>Node server created by manvendera pathak</h1>");
// });
// server.listen(PORT, () => {
//   console.log(`server is running at ${HOSTNAME}:${PORT}`);
// });

const http = require("http");
const PORT = 5000;
const HOSTNAME = " localhost";
const server = http.createServer((req, res) => {
  // home page
  if(req.url== '/'){
    res.statusCode = 200;
  res.setHeader;
  {
    "Content-Type", "text/plain";
  }
  res.end('wellcome to home us page');
  }
  // about us page
  else if(req.url == '/about'){
    res.statusCode = 200;
    res.setHeader;
    {
      "Content-Type", "text/plain";
    }
    res.end('wellcome to about us page');
  }
  // Contact us page
  else if(req.url == '/contact'){
    res.statusCode = 200;
    res.setHeader;
    {
      "Content-Type", "text/plain";
    }
    res.end('wellcome to contact us page');

  }
  // product us page
  else if(req.url == '/product'){
    res.statusCode = 200;
    res.setHeader;
    {
      "Content-Type", "application/json";
    }
    res.end(JSON.stringify({productName:"product 1"}));

  }
  else {
       res.statusCode =500;
       res.setHeader;{
        "Content-Type","application/json";
       }
       res.end(JSON.stringify({Error:"server error"}))
  }
  

 
});
server.listen(PORT, () => {
  console.log(`server is running at ${HOSTNAME}:${PORT}`);
});
