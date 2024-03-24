//import console module

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
//functions defination
function calculateTax(income){

    //define our taxslabs on the bases of the tax rates
    const taxbracket= [
        //Tax rate of 10% for income of upto 24k
        {limit: 24000, rate: 0.1},

         //Tax rate of 25% for income of upto 24k
         {limit: 32333, rate:0.25},

          //Tax rate of 30% for income of upto 24k
          {limit:500000, rate: 0.3},

           //Tax rate of 35% for income of upto 24k
           {limit: 800000, rate: 0.35},

    ];

    //zerorise our initial tax
    let tax =0;
    //initialize remaining income to total income
    let remainIncome = income;

    //iterate theough each tax bracket calculate the tax 
    for (const bracket of taxbracket){
        //check if there is any remaining income to be taxed
        if(remainIncome <=0) break;
        //calculate taxable amount within the current slab
        const taxableAmount =Math.min(remainIncome, bracket.limit);
        //calculate the taxfor the taxable amount
        tax+= taxableAmount *bracket.rate;

        //update 
        remainIncome -= taxableAmount
    }

    //return the total tax calculation
    return tax;
}

// NHIF rates
function calculateNHIFDeductions(grossPay){
    const nhifRates = [
        {limit:5999, deduction: 150},
        {limit:11999, deduction: 400},
        {limit:29999, deduction: 850},
        {limit:100000, deduction: 1700},

    ];
    for (const rate of nhifRates){
        if (grossPay<= rate.limit){
            return rate.deduction;
        }
    }
    //exceed the highest limit
   return nhifRates[nhifRates.length - 1].deduction;

}


// nssf rates 
function calculateNSSFContributions(pensionalPay){
    //employee contribution rate for tier 1
    const tierIRate = 0.06;
    //lowerlimit foe tier II
    const tierIILowestLimit = 7001; 

if(pensionalPay <= tierIILowestLimit){
    //is it within? calc contr based on tier 1 rate
    return pensionalPay * tierIRate;
} else {
    //if it exceeds
    return tierIILowestLimit * tierIRate;
}
}

//calculate our net salary
function calculateNetSalary(basicSalary, benefits){
    //calculate gross salary>>> adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
    //calculate tax 
    const tax = calculateTax(grossSalary);
    //calculate NHIF decuctions based on grosssalary
    const NHIFDeductions = calculateNHIFDeductions(grossSalary);
    //calculate NSSF ded based on basic
    const NSSFDeductions = calculateNSSFContributions(basicSalary);
    //net salary>> sub tax,nhif ded, & nssf ded from gross salary
    const netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;

    //results
    return{
        grossSalary,
        tax,
        NHIFDeductions,
        NSSFDeductions,
        netSalary
    };
}


 //function to run the program
 async function run(){
    //get user input for basic salary

    const basicSalary = await getUserInput("your basic salary = ");

    //user benefits 
    const benefits = await getUserInput("Your Benefits = ");

    //calc net salary in response to user input
    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    //display the calc
    console.log("Gross = ", salaryDetails.grossSalary);
    console.log("Tax = ", salaryDetails.tax);
    console.log("NHIF Ded = ", salaryDetails.NHIFDeductions);
    console.log("NSSF Ded = ", salaryDetails.NSSFDeductions);
    console.log("Net = ", salaryDetails.netSalary);
 }

 run();
