/*
Example String Values 
    const tv = "50-inch Sony A9G Master Series"
    const gameConsole = "Sony Plastation 5'
    const computer = "MacBook Pro M3'
*/

// Create variables for your electronics
const computer = "MacBook Pro M3"
const phone = "Iphone 15 Pro"
const television = "Samsung 65-inch QLED"
const refrigerator = "GE Profile Series"

/*
Example String Interpolation
Define Variables for strings
    const gameConsole = "Sony Playstation"
    const computer = "2017 Macbook Pro"

Interpolation example
    const gameSystems = `I play games on my ${gameConsole} and my ${computer}`
    console.log(gameSystems)
*/

// Use string interpolation to create a sentence with all electronics
const allElectronics = `I have the following electronic devices. My ${television} television, my ${computer} computer, my ${refrigerator} refrigerator, my ${phone} phone`

console.log(allElectronics)

/*
Example Output:
 "I have the following electronic devices. My xxx television, my xxx computer, my xxx refrigerator, and my xxx phone"
*/