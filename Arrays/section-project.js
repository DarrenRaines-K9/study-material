// Sample monthly expenses
const monthlyExpenses = [
    "Kroger Groceries:251", "Uber:39", "Netflix Movie Service:12",
    "Utility Internet:85", "Old Navy Clothing:145", "Lyft:34",
    "Utility Electric:91", "Clothing Outlet:122",
    "Fast Food Restaurant:18", "Shell Fuel:42", "Movie Theater:44",
    "Utility Water:27", "Best Buy Electronics:299", "Apple Store:899",
    "Gas Station:31", "Movie Rental:4", "Amazon:112", "Gas Station:33",
    "Movie Theater:47", "Utility Electric:88", "Clothing Outlet:112",
    "Fast Food Restaurant:21", "Shell Fuel:42", "Movie Theater:44"
]

// Arrays for categories and the words to look for
const clothing = []        // "Clothing"
const entertainment = []   // "Movie"
const food = []            // "Groceries" or "Restaurant"
const fuel = []            // "Fuel" or "Gas"
const travel = []          // "Lyft" or "Uber"
const utilities = []       // "Utility"
const largePurchases = []  // Expenses over 100.00

// Totals and averages
let totalExpenses = 0
let averageExpense = 0


/*
 Use your algorithmic thinking for the steps to
 categorize, total, and average the expenses.

 Be patient and take your time. This is challenging.
*/
