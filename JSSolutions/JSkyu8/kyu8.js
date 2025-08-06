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

/**Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting */

function enough(cap, on, wait) {
return cap>=on+wait ? 0:(cap-(on+wait))*-1;
}

/**You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. 
Return false otherwise.
Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let x = 0;
  let y = 0;
  for (let dir of walk) {
    if (dir === 'n') y++;
    if (dir === 's') y--;
    if (dir === 'e') x++;
    if (dir === 'w') x--;
  }
  return x === 0 && y === 0;
}

/**Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string. */

String.prototype.toAlternatingCase = function () {
  return this.split('').map(char=> char===char.toUpperCase()? char.toLowerCase():char.toUpperCase()).join('');
}

/**Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.
Write a function to help Bob with this calculation. */

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

/**The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

function openOrSenior(data){
  const result = data.map(players=>{
    const [a,b] = players;
  if(a>=55&&b>7){
    return "Senior"
  }else{
    return "Open"
  }
  })
return result
}

/**
 * A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Notec
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3
- h = 3, bounce = 1, window = 1.5, result is -1 
(Condition 2) not fulfilled).
 */

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  let height = h;
  let count = 0;
  while (height > window) {
    count++; 
    height *= bounce;
    if (height > window) {
      count++; 
    }
  }
  return count;
}

/**Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]
Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters.
Note: keep the original order of the names in the output. */

function friend(friends){
  return friends.filter(a=>a.length===4)
}

/**Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same. */

function countSmileys(arr) {
  return arr.filter(face => {
    if (face.length === 2) {
      return (face[0] === ':' || face[0] === ';') &&
             (face[1] === ')' || face[1] === 'D');
    } else if (face.length === 3) {
      return (face[0] === ':' || face[0] === ';') &&
             (face[1] === '-' || face[1] === '~') &&
             (face[2] === ')' || face[2] === 'D');
    }
    return false;
  }).length;
}

/**Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

function lovefunc(flower1, flower2){
  return (flower1+flower2)%2===0?false:true;
}

/**This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.
About factors
Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because: 2 * 3 = 6
You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1
Note: base is a non-negative number, factor is a positive number. */

function checkForFactor (base, factor) {
  return (base%factor)===0?true:false;
}

/**Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length. */

function sortByLength (array) {
    return array.sort((a,b)=>a.length-b.length);
}

/**
 * Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.
Rules:
1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 
2.  If the character in the string is whitespace then pass over it as if it was an empty seat
 */

function wave(str) {
  let arr = [];  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    arr.push(waveStr);
  }
  return arr;
}

/**A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return true if yes, false otherwise :) */

function hero(bullets, dragons){
return bullets/dragons>=2;
}

/**A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerStr = string.toLowerCase();
  return [...alphabet].every(letter => lowerStr.includes(letter));
}

/**A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function(n){
return n>=0?Number.isInteger(Math.sqrt(n)):false
  }

/**Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true] */

  function countSheeps(sheep) {
  let count =0;
  for(let i =0; i<sheep.length;i++){
    if(sheep[i]==true){
      count +=1;
    }
  }
  return count;
}

/**Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */

function getGrade (s1, s2, s3) {
  let score = (s1+s2+s3)/3
if(score>=90&&score<=100){
  return 'A'
}else if(score>=80&&score<90){
  return 'B'
}else if(score>=70&&score<80){
  return 'C'
}else if(score>=60&&score<70){
  return 'D'
}else if(score>=0&&score<60){
  return 'F'
}
}

function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

/**You get an array of numbers, return the sum of all of the positives ones.
Example [1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
 */

function positiveSum(arr) {
  let positive = arr.filter(num=>num>=0);
  return positive.reduce((sum, num)=>sum+num,0)
}

/**You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
let odd=[]
  for(let i =0; i<array.length; i++){
    if(array[i]%2!==0){
      odd.push(array[i])
    }
  }
let sortOdd=odd.sort((a,b)=>a-b)
let newArray =[]
let oddIndex =0;
for(let i =0; i<array.length; i++){
  if(array[i]%2===0){
    newArray.push(array[i])
  }else{
    newArray.push(sortOdd[oddIndex++])
  }
}
return newArray
}

/**Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar. */

function isPalindrome(x) {
return x.toLowerCase()===x.toLowerCase().split('').reverse().join('')?true:false;
}

/**Summation
Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
For example (Input -> Output):
2 -> 3 (1 + 2) */

var summation = function (num) {
let sum = 0
  for(let i =1; i<=num; i++){
   sum+=i;
  }
return sum
}

/**Messi goals function
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
For example:
5, 10, 2  -->  17 */

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}