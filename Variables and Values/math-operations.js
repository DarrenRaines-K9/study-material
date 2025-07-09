/*
Math Operators
These are the basic math operators in JavaScript:
+ <-- Addition 
- <-- Subtraction
* <-- Multiplication
/ <-- Division
% <-- Modulus (remainder of division)
** <-- Exponentiation (power of)

Operators:
+= <-- Add and assign
-= <-- Subtract and assign
*= <-- Multiply and assign
/= <-- Divide and assign
%= <-- Modulus and assign
**= <-- Exponentiation and assign
*/

// Define a variable for your monthly income
const myIncome = 4388

// Define a variable for your husband's monthly income
const spouseIncome = 3512

// Define variables for your monthly bills
const internetBill = 158
const waterBill = 68
const electricBill = 129
const fuelExpenses = 295
const foodExpenses = 503

// Define a variable to calculate combined income
let combinedIncome = myIncome + spouseIncome

// Define a variable and Calculate net income (combined income minus all expenses)
let netIncome = combinedIncome - internetBill

// Now use the -= operator to subtract the other expenses from netIncome
netIncome -= waterBill
netIncome -= electricBill
netIncome -= fuelExpenses
netIncome -= foodExpenses

// Define a variable to create the output string using string interpolation
const output = `Our combined monthly income is ${combinedIncome}. Our net monthly income is ${netIncome}.`

console.log(output)

/*
Example Output:
 "Our combined monthly income is xxx. Our net monthly income is xxx."
*/

/*
Review:
First module i noticed where it was very specific to things such as punctuation. 
What happened?
Run Test Failed because of a "."
*/