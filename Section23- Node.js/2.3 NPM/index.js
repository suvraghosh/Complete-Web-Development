// This is using common js 
//var generateName = require("sillyname");

//Here we import modules from changing the type in the json file,this is an ecmascript module
import generateName from "sillyname"
var sillyName = generateName();
console.log(`My name is ${sillyName}.`)

import superheroes from "superheroes"
const name = superheroes.random();
console.log(`I am ${name}!`);