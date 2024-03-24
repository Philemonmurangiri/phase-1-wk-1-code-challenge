//import module

const { run } = require('node:test');
const readline = require('readline');


//function to get the user input
function getUserInput(question){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });
 
 return new Promise((resolve) => {
    rl.question(question, (answer) =>{
        rl.close();
        resolve(parseFloat(answer));
    });
 });

//defining a function 
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritUpperLimit = 12;
// display to the driver 
    if (speed <= speedLimit) {
        console.log("Ok");
        return "ok";
    }
//calculating demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
// display to the driver
    if (demeritPoints < 12 )
    console.log("Points:", demeritPoints);
// display to the driver
    else if (demeritPoints > demeritUpperLimit) {
        console.log("License suspended");
    }
}

rl.close}
run();


