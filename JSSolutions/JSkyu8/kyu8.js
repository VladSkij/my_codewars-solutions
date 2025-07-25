// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
    return n%2===0;
}

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  const copy = [...numbers]
  const min = Math.min(...copy)
  const index = copy.indexOf(min)
  copy.splice(index, 1)
  return copy;
}

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// Please modify this as appropriate for your language.

// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]

function greet(language) {
  
	let languageDataBase = [ 
  ["english", "Welcome"]
, ["czech", "Vitejte"]
, ["danish", "Velkomst"]
, ["dutch", "Welkom"]
, ["estonian", "Tere tulemast"]
, ["finnish", "Tervetuloa"]
, ["flemish", "Welgekomen"]
, ["french", "Bienvenue"]
, ["german", "Willkommen"]
, ["irish", "Failte"]
, ["italian", "Benvenuto"]
, ["latvian", "Gaidits"]
, ["lithuanian", "Laukiamas"]
, ["polish", "Witamy"]
, ["spanish", "Bienvenido"]
, ["swedish", "Valkommen"]
, ["welsh", "Croeso"]
]
  
for(let i = 0; i<languageDataBase.length; i++){
  if(languageDataBase[i][0]===language){
    return languageDataBase[i][1]
  }
}
  return 'Welcome'
}