const information = require('./information');
console.log(`Hi, my name is ${information.name} and I'm in ${information.campus}`);

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : "Hi, my name is " +information.name +" and I'm in " +information.campus,
    e : "oO",
    T : "U "
}));