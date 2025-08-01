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

/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

function stray(numbers) {
return numbers.sort((a,b)=>a-b)[0]===numbers[1]?numbers[numbers.length-1]:numbers[0]
}

/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!*/

function smash (words) {
let word=""
   for(let i=0; i<words.length; i++){
     word+=words[i]+" "
   }
return word.trim()
};

/*Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10] */

function countBy(x, n) {
  let z = [];
for(let i=1; i<=n;i++){
  z.push(x*i)
}
  return z;
}

/*Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;) */

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  if (n <= 3) {
    return signature.slice(0, n);
  }

  let result = [...signature];
  for (let i = 3; i < n; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }

  return result;
}

/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
let newString=""
  for(let i=0; i<string.length;i++){
    if(string[i]!==string[i].toUpperCase()){
      newString+=string[i]
    }else{
      newString+=" "+string[i]
    }
  }
return newString
}

/*This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function accum(s) {
  let string = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    string += char.toUpperCase() + char.repeat(i).toLowerCase() + "-";
  }
  return string.slice(0, -1);
}

/**Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2] */

function powersOfTwo(n){
 let arr=[];
  for(let i=0; i<=n; i++){
   arr.push(2**i);
  }
return arr;
}

/**Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

function domainName(url) {
  let urlParts = url.split("//");
  let noProtocol = urlParts.length > 1 ? urlParts[1] : urlParts[0]; 
  let noWww = noProtocol.startsWith("www.") ? noProtocol.slice(4) : noProtocol; 
  let host = noWww.split("."); 
  return host[0]; 
}

/**You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. 
For example, the test input may be "1 year old" or "5 years old". 
The first character in the string is always a number. */

function getAge(inputString){
return Number(inputString[0]);
}

/**Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
Example output: Hello, Mr. Spock */

function sayHello(name) {
  return ("Hello, "+name)
}