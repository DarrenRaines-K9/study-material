/*
String Methods:
(.length) Length Property --> returns the number of characters in a string.
    const patientName = "John Doe";
    console.log(patientName.length); // Output: 8

    const empty = "";
    console.log(empty.length); // Output: 0

Case Transformation
.toUpperCase() --> converts all characters in a string to uppercase.
    const message = "Hello, World!";
    console.log(message.toUpperCase()); // Output: "HELLO, WORLD!"

.toLowerCase() --> converts all characters in a string to lowercase.
    const shout = "PLEASE BE QUIET";
    console.log(shout.toLowerCase()); // Output: "please be quiet"

White Space Removal
.trim() --> removes whitespace from both ends of a string.
    const userInput = "   hello@email.com   "
    console.log(userInput.trim()) // Output: "hello@email.com"

.trimStart()/.trimLeft() --> removes whitespace from the beginning of a string.
    const leftPadded = "   Text"
    console.log(leftPadded.trimStart()) // Output: "Text"

.trimEnd()/.trimRight() --> removes whitespace from the end of a string.
    const rightPadded = "Text   "
    console.log(rightPadded.trimEnd()) // Output: "Text"

Substring Extraction
.slice(start, end) --> extracts a section of a string and returns it as a new string
    const text = "JavaScript"
    console.log(text.slice(0, 4)) // Output: "Java"
    console.log(text.slice(4)) // Output: "Script"
    console.log(text.slice(-6)) // Output: "Script" (counting from end)

.substring(start, end) --> similar to slice, but does not support negative indices.
    const language = "JavaScript"
    console.log(language.substring(0, 4)) // Output: "Java"
    
Search and Replace
.includes(searchString) --> checks if a string contains a specified substring.
    const sentence = "The quick brown fox"
    console.log(sentence.includes("fox")) // Output: true
    console.log(sentence.includes("cat")) // Output: false

.startsWith(searchString) --> checks if a string starts with a specified substring.
    const filename = "document.pdf"
    console.log(filename.startsWith("doc")) // Output: true

endsWith(searchString) --> checks if a string ends with a specified substring.
    const filename = "report.txt"
    console.log(filename.endsWith(".txt")) // Output: true

.replace(searchValue, newValue) --> replaces occurrences of a substring with a new value.
    const message = "Hello, John"
    console.log(message.replace("John", "Jane")) // Output: "Hello, Jane"

.replaceAll(searchValue, newValue) --> replaces all occurrences of a substring with a new value.
    const text = "cat cat cat"
    console.log(text.replaceAll("cat", "dog")) // Output: "dog dog dog"
*/

// Remove spaces from the beginning and end of the email
const email = "   hello@email.com   "
console.log(email.trim())

// Replace the space with a hyphen in the phone number
const phone = "555 0123"
console.log(phone.replace(" ", "-"))
// Convert the name to all uppercase
const customerName = "john"
console.log(customerName.toUpperCase())

// Check if the password contains the letter "x"
const password = "SecurePass"
console.log(password.includes("x"))

// Get the first 4 characters of the filename
const filename = "vacation.jpg"
console.log(filename.slice(0, 4))

// Your code here (use only ONE string method for each task):
const cleanEmail = email.trim()
const formattedPhone = phone.replace(" ", "-")
const formattedName = customerName.toUpperCase()
const containsX = password.includes("x")
const fileStart = filename.slice(0, 4)

// These allow you to check your results when you click the "Run Code" button
console.log(cleanEmail)
console.log(formattedPhone)
console.log(formattedName)
console.log(containsX)
console.log(fileStart)
