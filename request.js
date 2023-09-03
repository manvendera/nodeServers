const http = require('http');


const options = {
    hostname: 'fakestoreapi.com',
    path:'/product/1',
    method:'GET'
}

const apiReq = http.request(options, (apiRes)=>{
    apiRes.on("data", (data)=>{

        console.log(data);
    })
});

apiReq.on("error",()=>{
    console.log(e);
})

apiReq.end();