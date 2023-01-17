// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe ("operationClassified" , () => {
  it ( "takes in a string and returns a string with a coded message" , () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(operationClassified(secretCodeWord1)).toEqual("Lackadaisical")
    expect(operationClassified(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(operationClassified(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// ● operationClassified › takes in a string and returns a string with a coded message
// ReferenceError: operationClassified is not defined
// Test Suites: 1 failed, 1 total

// b) Create the function that makes the test pass.

// PSEUDO CODE 
// input: string 
// output: string 
// create a function called operationClassified
// find the a's in the string and replace with 4 
// find the e's in the string and replace with 3
// find the i's in the string and replace with 1
// find the o's in the string and replace with 0 

const operationClassified = (word,letter_to_replace, replacement_letter) =>{
  word = word.replaceAll('a', '4')
  word = word.replaceAll('e', '3')
  word = word.replaceAll('i', '1')
  word = word.replaceAll('o', '0')
  return word
}

const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

console.log(operationClassified(secretCodeWord1))


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe ("doesItContain" , () => {
  it ("takes in an array of words and a single letter and returns an array of all the words containing that particular letter." , () =>{
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(doesItContain(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(doesItContain(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// b) Create the function that makes the test pass.

// PSEUDO CODE  
// input: an array and single letter string
// output: subset of the array 
// create a funtion called doesItContain 
// filter through each element in the the array (.includes) looking for the parameter/string passed in 
// make elements and the string all lower case
// if the element includes the single letter that is passed in through a variable return the element

const doesItContain = (array, string) =>{
  array.filter(val => val.toLowerCase().includes(string.toLowerCase()))
}

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
console.log(doesItContain(fruitArray, letterA))

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#:~:text=The%20filter()%20method%20is,included%20in%20the%20new%20array.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe ("fullHouse" , () => {
  it ("takes in an array of 5 numbers and determines whether or not the array is a full house" , () => {
    expect(fullHouse(hand1)).toEqual(true) 
    expect(fullHouse(hand2)).toEqaul(false) 
    expect(fullHouse(hand3)).toEqaul(false) 
    expect(fullHouse(hand4)).toEqaul(false)
  })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// PSEUDO CODE
// input: an array 
// output: boolean
// create a function called fullHouse 
// to see how many instances there are of any given value build an object with the key being the values from the array and the value being the count
// (key(element) : value(how many times it appears))
// use a for loop to interate through the array 
// if object doesn't have a key matching currentValue, add it and set it to a counter of 1
// else object does have a key matching currentValue (so a counter is already set up),increment the counter by 1

const fullHouse = (arr) => {
  let countingObject = {}
  for (i=0; i < arr.length; i++) {
  let currentValue = arr[i]
  // if object doesn't have a key matching currentValue, lets add it and set it to a counter of 0
  if (countingObject[currentValue] === undefined) {
  countingObject[currentValue] = 1
  } else { // If object does have a key matching currentValue (so a counter already set up), lets increment the counter by 1
  countingObject[currentValue] = countingObject[currentValue] + 1
  }
  }
  objectValues = Object.values(countingObject)
  return (objectValues.includes(2) && objectValues.includes(3))
  }
  // objectValues.includes(2) will return either true or false && objectValues.includes(3) will return either true or false
  // so now either true && true or true && false or false && false from the above statement