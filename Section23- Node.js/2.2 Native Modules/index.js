const { log } = require("console");
const fs = require("fs");

// Writing files
// fs.writeFileSync("Writting_msg.txt","This is a message using native modules",(err)=>{
//     if(err) throw err;
//     console.log("This file has been saved");
// })

// Reading files(Filepath, Uni charcter,callback function)
fs.readFile("./Writting_msg.txt","utf-8",(err,data)=>{
    if (err) {
        console.error(err);
        return;
      }
      console.log(data);
});