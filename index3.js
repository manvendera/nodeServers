const fs = require('fs');
const { buffer } = require('stream/consumers');
// console.log("Read START");
// asynchronous way to read file data
// fs.readFile('input.txt',function(err,data){
//     if (err){
//         console.log("Error:",err,data);
//         return err;
//     }
//     console.log("Data :", data.toString());
//     console.log("Read End");
//     return data;
// })

// console.log("Read last");

// synchronous way to read file data
// var data = fs.readFileSync('input.txt');
// console.log("Data : ", data.toString());
// console.log("Read first");
// console.log("Read last");


const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function(err,fd){
//     if(err){
//         console.log("Error in opening file: ", err);
//     }
//     console.log("File open successfully");

//     fs.read(fd,buf, 0,buf.length, 0,function(err,bytes){
//         if(err){
//             console.log("Error in readin file");
//         }
//         console.log("Data: ", bytes);
//         console.log("Data :" ,buf.slice(0 , bytes).toString());
//         fs.close(fd, function(err){
//             if(err){
//                 console.log("Error in closing file");
//             } else {
//                 console.log("Success in closing file");
//             }
//         })
//     })
// })
//  writing text into file

// fs.writeFile("input.txt",'manvendera pathak' ,function(err){
//     if (err){
//         console.log("Errorin writing file");
//     } else 
//     console.log("Success in writing file");
// })
//  appnd in file

// fs.appendFile('input.txt',' is a student of computer science', function(err){
//     if(err){
//         console.log("Errror in appendein file");
//     }
//     else{
//         console.log("Sucess in append file");
//     }
// })
fs.unlink('input.txt',function(err){
    if(err){
        console.log("Error in delting file");
    }
    else{
        console.log("Sucess in deleting file");
    }
})