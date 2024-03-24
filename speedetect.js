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
}
//defining a function 
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
        return ok;
    }
//calculating demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log("Points:", demeritPoints);
// display to the driver
    if (demeritPoints > demeritPointsThreshold) {
        console.log("License suspended");
    }
}
run();