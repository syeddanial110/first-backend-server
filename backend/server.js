import * as fs from 'fs';

fs.readFile('index.txt','utf-8', function(err,data){
    if (err) {
        console.log("404 Error")
    } else {
        console.log("data" , data)
    }
} )
// const data=fs.readFileSync('index.txt','utf-8')
// console.log(data,"Data");

console.log("First node")
// console.log(fs.read, "fs read")