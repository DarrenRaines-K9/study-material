// Initialize variables for photo counts
let photoStorage = "Envelopes"
const femalePhotos = 72  // More women for our test case
const malePhotos = 52    // Total will be 124
let totalPhotos = 0
let albumColor = ""

// Calculate total photos
totalPhotos = femalePhotos + malePhotos

// Determine storage type based on total
if (totalPhotos > 110) {
    photoStorage = "Photo Album"
} else if (totalPhotos >= 50) {
    photoStorage = "Shoe Box"
} else {
    photoStorage = "Envelopes"
}

// Determine album color based on gender comparison
if (femalePhotos > malePhotos) {
    albumColor = "plum"
} else {
    albumColor = "gray"
}

// Create the output string using string interpolation
const output = `There are ${totalPhotos} total photos
There are ${femalePhotos} photos of women
There are ${malePhotos} photos of men
Photos will be stored in a ${photoStorage} colored ${albumColor}`

console.log(output)

/* 
Review: 
Below is a refactored version of the code that uses a function to determine the storage type and includes comments for clarity:

// Initialize variables for photo counts
let photoStorage = "Envelopes"
const femalePhotos = 72  // More women for our test case
const malePhotos = 52    // Total will be 124
let totalPhotos = 0
let albumColor = ""

// Calculate total photos
totalPhotos = femalePhotos + malePhotos


// Determine storage type based on total
const storageType = () => {

// Utilize a conditional statement to determine storage type
  if (totalPhotos > 110) {
    return "Photo ALbum"
  }
  else if (totalPhotos < 110 && totalPhotos > 50) { 
    return "Shoe Box"
  }
  else (totalPhotos < 50)
      return photoStorage
}

//const storageType = totalPhotos > 100 ? "Box" : photoStorage <-- refactored implementation

// Determine album color based on gender comparison
if (femalePhotos > malePhotos) {
  albumColor = "Plum"
}
else if (femalePhotos < malePhotos) {
    albumColor = "Gray"

}

// Create the expected output string using string interpolation
const output = `There are ${totalPhotos} total photos
There are ${femalePhotos} photos of women
There are ${malePhotos} photos of men
Photos will be stored in a ${albumColor} colored ${storageType()}`

// Log your output
console.log(output)
*/

