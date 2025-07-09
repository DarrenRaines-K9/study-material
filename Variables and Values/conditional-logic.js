/*
Conditional Logic
Conditional logic allows you to execute different code based on certain conditions.

Boolean Values
Boolean values are either true or false. They are often used in conditional statements to control the flow of a program.

If Statements:
An if statement executes a block of code if a specified condition is true. If the condition is false, the code block is skipped.

    let haveStrep = false
    let haveCommonCold = true
    let haveInfluenza = false


You could just have a cold. If that condition is true, then you just

    if (haveCommonCold === true) {
        console.log("Go home and get plenty of rest for 7 days.")
    }

You could have the flu. If that condition is true, you hopefully can take Tamiflu and you need to drink copious amounts of water.

    if (haveInfluenza === true) {
        console.log("Use Tamiflu and drink a minimum of 6 glasses of water every day.")
    }

You could have strep throat. If that condition is true, then you need to start on antibiotics right away.

    if (haveStrep === true) {
        console.log("Get antibiotics prescription filled and take them every day.")
    }

If/Else Statements:
An if else statement combines both if and else statements, allowing you to specify two different code blocks based on the condition's truthiness.


    const proteinWeek = true
    if (proteinWeek === false) {
    // Since it's not protein week, it must be carb week.
        console.log("Reminder: Buy 2 boxes of spaghetti, 4 packets of flavored rice, and 2 bags of frozen corn.")
    }
    else {
    // It's protein week
        console.log("Reminder: Buy 1 pound of bacon, 2 pounds of ground sirloin and 1 pound of sliced turkey.")
    }
*/

// Set this to false since you slept in
const iWokeUpEarly = false

// Use an if/else statement to output the appropriate message
if (iWokeUpEarly === true) {
    console.log("Yoga was fun today.")
} false

console.log(iWokeUpEarly)