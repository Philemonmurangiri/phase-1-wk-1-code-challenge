const { run } = require("node:test");

// import console module
readline = require("readline");

//interface creation
const rl = readline.createInterface({
    //input
    input: process.stdin,
    //output
    output: process.stdout
});

// writing a function 
function calculateGrade(marks) {
    // Assigning grades based on the marks
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
}
//user inputs
question("Enter your marks:", (input)=>{
    let marks = parseFloat(input);
    // check if it is a number
    if (isNaN(marks)){
    // creating the range
        if (marks>=0 && marks >=100)
    // logging
            console.log(`Grade:, ${grade}`);   
    } else {
        // display marks not valid
        console.log("marks not valid" )
    }
        

    
rl.close});

run();