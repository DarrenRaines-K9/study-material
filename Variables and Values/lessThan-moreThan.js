/*
Example:
    let bagsOfChips = 0
    let vegetableTrays = 0
    let sodaBottles = 0
    let beerCases = 0

    const attendees = 32

// First condition is true: 50 people or more
    if (attendees >= 50) {
        bagsOfChips = 20
        vegetableTrays = 3
        sodaBottles = 15
        beerCases = 5
    }

// Second condition is true: Less than 50, but 25 or more
    else if (attendees < 50 && attendees >= 25) {
        bagsOfChips = 15
        vegetableTrays = 2
        sodaBottles = 10
        beerCases = 3
    }

    // Final condition is true: Less than 25
    else {
        bagsOfChips = 10
        vegetableTrays = 1
        sodaBottles = 5
        beerCases = 2
    }

// String interpolation practice with multi-line string output
    console.log(`I need to buy the following supplies
    ${bagsOfChips} bags of chips
    ${vegetableTrays} vegetable trays
    ${sodaBottles} bottles of soda
    ${beerCases} cases of beer
    `)
*/

// Define variables for clothing
let torsoClothing = ""
let legClothing = ""
let footWear = ""

// Set the temperature variable
const temperature = 48

/*
   The first condition is already written for you.
   Add your `else if` and `else` conditions below this one.
*/

// Conditional if the temperature is 95 degrees or more, you will wear a t-shirt. You will wear shorts. You will wear sandals.
if (temperature >= 95) {
    torsoClothing = "T-shirt"
    legClothing = "Shorts"
    footWear = "Sandals"
}

// Conditional if the temperature is less than 95, but greater than or equal to 75 degrees, you will wear a t-shirt. You will wear shorts. You will wear sneakers.
else if (temperature < 95 && temperature >= 75) {
    torsoClothing = "T-shirt"
    legClothing = "Shorts"
    footWear = "Sneakers"
}

// Conditional if the temperature is less than 75, but greater than or equal to 50 degrees, you will wear a sweater. You will wear pants. You will wear sneakers.
else if (temperature < 75 && temperature >= 50) {
    torsoClothing = "Sweater"
    legClothing = "Pants"
    footWear = "Sneakers"
}

// Conditional if the temperature is less than 50, but greater than or equal to 35 degrees, you will wear a jacket. You will wear pants. You will wear sneakers.
else if (temperature < 50 && temperature >= 35) {
    torsoClothing = "Jacket"
    legClothing = "Pants"
    footWear = "Sneakers"
}

// Conditional if the temperature is less than 35 degrees, you will wear a jacket. You will wear pants. You will wear boots.
else {
    torsoClothing = "Jacket"
    legClothing = "Pants"
    footWear = "Boots"
}

// String interpolation practice with multi-line string output
console.log(`This is what I'm wearing today:
${torsoClothing} on my torso
${legClothing} on my legs
${footWear} on my feet
`)

