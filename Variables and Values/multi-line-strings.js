/*
Example:
Downstairs rooms
    const livingRoom =  595
    const kitchen =  408
    const office =  235
    const powderRoom =  68

Upstairs rooms
    const mainBedroom =  475
    const mainBath =  270
    const guestBath =  100
    const guestBedroom =  415

To avoid variable making overload,
you can do the addition inside the
interpolation 

    console.log(`Living room: ${livingRoom}`)
    console.log(`Kitchen: ${kitchen}`)
    console.log(`Office: ${office}`)
    console.log(`Powder room: ${powderRoom}`)
    console.log(`Total area of first floor: ${livingRoom + kitchen + office + powderRoom}`)
*/

// Define a variable to determine each monthly income
const myIncome = 5478
const spouseIncome = 4028

// Monthly expenses
const phoneBill = 254
const mortgage = 2161
const carInsurance = 205
const healthInsurance = 508

// Create a multi-line string that shows:
// 1. Combined monthly income
console.log(`Our combined monthly income is ${myIncome + spouseIncome}`)

// 2. Total monthly expenses
console.log(`Our total monthly expenses are ${phoneBill + mortgage + carInsurance + healthInsurance}`)

// 3. Net monthly income
const combinedIncome = myIncome + spouseIncome;
const statement = `Our net monthly income is ${combinedIncome - phoneBill - mortgage - carInsurance - healthInsurance}.`;  // Use backticks and calculations here

console.log(statement)
/* 
Example Output:
Our combined monthly income is 9506.
Our total monthly expenses are 3128.
Our net monthly income is 6378.
*/


/*
Review:
Although the output in the code is correct and the algorithm is structured the same way in the course the test wont run successfully below is an alternate algorithm that will run successfully

Define a variable to determine each monthly income
    const myIncome = 5478
    const spouseIncome = 4028

Monthly expenses
    const phoneBill = 254
    const mortgage = 2161
    const carInsurance = 205
    const healthInsurance = 508


 Create a multi-line string that shows:
 1. Combined monthly income
Define a variable to calculate combined income

    const combinedMonthlyIncome = myIncome + spouseIncome;
    console.log(`Our combined monthly income is ${combinedMonthlyIncome}`)

 2. Total monthly expenses
Define a variable to calculate total monthly expenses
    const totalMonthlyExpenses = phoneBill + mortgage + carInsurance + healthInsurance;
    console.log(`Our total monthly expenses are ${totalMonthlyExpenses}`)

3. Net monthly income;
Define a variable to calculate net monthly income
    const statement = `Our net monthly income is ${combinedMonthlyIncome - totalMonthlyExpenses}.`;  // Use backticks and calculations here

    console.log(statement)

Solution tab runs it in the following format:

    const statement = `Our combined monthly income is ${myIncome + spouseIncome}.
    Our total monthly expenses are ${phoneBill + mortgage + carInsurance + healthInsurance}.
    Our net monthly income is ${(myIncome + spouseIncome) - (phoneBill + mortgage + carInsurance + healthInsurance)}.`

Note:
Key part being they want you to combine the addition logic in parentheses and then subtract
*/