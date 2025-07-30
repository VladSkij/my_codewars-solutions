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

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr){
  arr.sort((a,b) => a - b);
  
  if (arr[0] === arr[1]){
    return arr[arr.length - 1];
  } else return arr[0];

}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
return bool?'Yes':'No'
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum (numbers) {
 return numbers.reduce((acc, cur)=>acc+cur, 0)
}  

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
return /^\d+$/.test(pin) && (pin.length=== 4 || pin.length=== 6)
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  // your code here
for (let i=0;i<a.length; i++){
  if(a[i]==x){
    return true
  } 
}
return false
}

// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here 
 return dadYearsOld / sonYearsOld === 2 ? 0: Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}

/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
  //happy coding!
let sortArray = A.sort();
let groups = [];
  for(let i =0; i<sortArray.length; i++){
    let current = sortArray[i];
    let prev = sortArray[i-1];
    if(current===prev){
      groups[groups.length-1].push(current)
    }else{
      groups.push([current])
    }
  }
  for(let i=0 ; i<groups.length; i++){
    let group=groups[i]
    if(group.length % 2 !== 0){
      return group[0]
    }
  }
}

/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  let count=0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let i=0; i<str.length; i++){
if(vowels.includes(str[i])){
  count++
}
    
  }
  return count;
}

/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

function rowSumOddNumbers(n) {
	// TODO
return n*n*n
}

/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__   */

function doubleChar(str) {
  // Your code here
let newStr=[];
  for(let i = 0; i<str.length; i++){
    newStr +=(str[i]+str[i])
  }
  return newStr
}

/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
let arr = name.split(" ")
    return (arr[0][0]+"."+arr[1][0]).toUpperCase()
}
