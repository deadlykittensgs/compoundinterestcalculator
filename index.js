// // #1 define a function that can find the final
//  value of the compound interest 

// // #2 define a function that can calculate 
// the difference (ie the impact that compounding has had )

// // #3 create a run function that pomps user 
// for inputs to calculate the final amount.

// // #4 clean up functions and print statement
//  using a template literal string that gives the 
//  financial breakdown 

const prompt = require('prompt-sync')()

// let initAmount = 2000
// let monthlyContribution = 400
// let numberOfYears = 30
// let InterestRate = 10

function compoundIntrest (initAmount, monthlyContribution,numberOfYears,InterestRate) {
    let total = initAmount
    let annualContribution  = monthlyContribution * 12

for (let i = 0; i < numberOfYears; i++) {
    total = total + annualContribution
    total = total * ((100+ InterestRate) /100)
}
return total.toFixed(2)
}


function calculateRegularAmount(initAmount, monthlyContribution, numberOfYears) {
return (initAmount + monthlyContribution * 12 * numberOfYears).toFixed(2)
}



function printOutput(initAmount, monthlyContribution, numberOfYears,InterestRate) {
    let finalValue = compoundIntrest(initAmount,monthlyContribution,numberOfYears,InterestRate)
    let finalValueNoInterest = calculateRegularAmount(initAmount,monthlyContribution,numberOfYears,InterestRate)

    let summery = `INIT AMOUNT: ${initAmount}\nMONTHLY CONTRIBUTION:${monthlyContribution}
    \nNUMBER OF YEARS: ${numberOfYears}\nINTEREST RATE${InterestRate}%\n\n FINAL COMPOUNDED VALUE$${finalValue}\n REGULAR AMMOUNT: $${finalValueNoInterest}\n DIFFERENCE: $${finalValue - finalValueNoInterest} `
    console.log(summery)
}


function run() {
    let initAmount = parseInt(prompt('What is your initial investment($)?'))
    let monthlyContribution = parseInt(prompt('what is your monthly contribution($)?'))
    let numberOfYears = parseInt(prompt("how many years would you like to calculate saving for?"))
    let InterestRate = parseInt(prompt("what is your interest rate(%)?"))
    printOutput(initAmount,monthlyContribution, numberOfYears, InterestRate )
}
run()