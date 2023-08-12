/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
var inquirer = require('inquirer');
var qr = require('qr-image');
var fs = require("fs");
inquirer
  .prompt([
    {
        message: 'What is your QR Link: ',
        name: 'URL'
    }
  ])
  .then((answers) => {
    {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('my_qr.png'));

        fs.writeFileSync("MyFile.txt",url,(err)=>{
            if(err) throw err;
            console.log("Successfull");
        })
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
