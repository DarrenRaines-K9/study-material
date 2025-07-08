/* <--How you start a comment for multiple lines in javaScript
Example Variables (standard naming convention):
    let oranges = 4
    let breadLoaves = 1
    let bagsOfChips = 2
    let milk = 1
    let tomatoSauce = 3
Example of why the variable name doesn't matter:
    let o = 4
    let bl = 1
    let boc = 2
    let m = 1
    let ts = 3
How you end it--> */

/*
Camel Case:
    let bagofdonuts = 2     Incorrect variable naming
    let bagOfDonuts = 2     Correct variable naming
    let cucumbers = 3       Good naming since it is a single word
    let icecream = 1        Incorrect variable naming
    let iceCream = 1        Correct variable naming
*/

// <--For commenting out a single line of code in Javascript
// January's electric bill declared with `let`
let januaryBill = 145

// Declare variables for the remaining months with the `let` keyword.
// Give them any numeric value you want.
let februaryBill = 155
let marchBill = 165
let aprilBill = 175
let mayBill = 185
let juneBill = 195
let julyBill = 205
let augustBill = 215
let septemberBill = 225
let octoberBill = 235
let novemberBill = 245
let decemberBill = 255

/*
   Then calculate the total yearly charges by declaring a constant
   variable named "yearlyTotal" that is the sum of all twelve months.
   Use the `const` keyword for this variable.
*/
const yearlyTotal = januaryBill + februaryBill + marchBill + aprilBill + mayBill + juneBill + julyBill + augustBill + septemberBill + octoberBill + novemberBill + decemberBill

console.log(yearlyTotal)