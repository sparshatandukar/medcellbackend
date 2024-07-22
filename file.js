const fs= require('fs');

const readFile=fs.readFile('greet.txt','utf-8',(err,data)=>{
    if(err) {
        console.log('Error:', err);
    }
    else{
        console.log(data);
    }
}
)

const writeFile=fs.writeFile('greet.txt','Hello',(err)=>{
    if(err) {
        console.log('Error:', err);
    }
    else{
        console.log("File written sucessfully");
    }
}
)

const updateFile= fs.appendFile('greet.txt','Hello People',(err)=>{
    if(err) {
        console.log('Error:', err);
    }
    else{
        console.log("File updated successfully");
    }
}
)

module.exports={readFile,writeFile,updateFile};