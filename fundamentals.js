/*

1. Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

*/

const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

/*

2. Given the triangle of consecutive odd numbers:
            1
         3     5
      7     9    11
  13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1)

*/

/* My solution */
const rowSumOddNumbers = rowNum => {
  let triangle = [];
  let oddInts = [-1];
  for(var i=0;i<=rowNum;i++) {
    let row = [];
    for(var j=1;j<=i;j++) {
      const int = oddInts[oddInts.length - 1] + 2;
      oddInts.push(int);
      row.push(int);
    };
    triangle.push(row);
  };
  return triangle[rowNum].reduce((accumulator, currentValue) => accumulator + currentValue);
};

/* Best practice */
const rowSumOddNumbers = n => Math.pow(n, 3);

/*

3. Very simple, given a number, find its opposite.

*/

/* My solution */
const opposite = number => number < 0 ? Math.abs(number) : number - 2 * (Math.abs(number));

/* Best practice */
const opposite = number => -number;

/*

4. Simple, remove the spaces from the string, then return the resultant string.

*/

const noSpace = x => x.replace(/\W/g, "");

/*

5. Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

*/

/* My solution */
const songDecoder = song => {
  song = song.replace(/WUB/g," ").trim().split("");
  return song.map((char, index) => song[index] !== " " ? char : song[index - 1] !== " " ? char : "").join("");
};

/* Best practice */
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

/*

6. Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

/* My solution */
function oddOrEven(array) {
  if(array.length > 0) {
    const dividedSum = array.reduce((accumulator, currentValue) => accumulator + currentValue) / 2;
    return dividedSum.toString().includes(".") ? 'odd' : 'even';
  } else {
    return 'even';
  };
};

/* Best practice */
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
};

/*

7.Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task

Write a function that returns both the minimum and maximum number of the given list/array.

*/

/* My solution */
const minMax = arr => [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];

/* Best practice */
const minMax = arr => [Math.min(Math, arr), Math.max(Math, arr)];

/*

8. Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

/* My solution */
function findShort(s){
  let shortestLength = s.split(" ")[0].length;
  for (let string of s.split(" ")) {
    if (string.length < shortestLength) shortestLength = string.length;
  };
  return shortestLength;
};

/* Best practice */
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

/*

9. You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

/* My solution */
function isValidWalk(walk) {
  let latitude = 0;
  let longitude = 0;
  for (let step in walk) {
    switch(walk[step]){
      case "n":
        longitude++;
        break;
      case "s":
        longitude--;
        break;
      case "e":
        latitude--;
        break;
      case "w":
        longitude++;
        break;
      default:
        /* do nothing */
    };
  };
  if(walk.length === 10) {
    return latitude === 0 && longitude === 0;
  } else {
    return false;
  };
};

/* Best practice */
//Unknown, kata test cases were coded incorrectly.

/*

10. Your task is to make function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, function should returns 0

*/

/* My solution */
const sequenceSum = (begin, end, step) => {
  if (begin <= end) {
    let valuesToSum = [begin];
    for (var i = begin; i <= end; i += step) {
      if (i + step <= end) valuesToSum.push(i + step);
    };
    return valuesToSum.reduce((previousValue, currentValue) => previousValue + currentValue);
  } else {
    return 0;
  };
};

/* Best practice */
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};

/*

11. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.

*/

/* My solution */
const array_diff = (list1, list2) => {
  let result = [];
  for (let i in list1) {
    let matchFound = false;
    for (let j in list2) if (list1[i] === list2[j]) matchFound = true;
    if (!matchFound) result.push(list1[i]);
  };
  return result;
};

/* Best practice */
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

/*

12. Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *

*/

/* My solution */
function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    let floor = "*";
    for (let j = 1; j < nFloors; j++) {
      floor = floor.split("");
      if (j < i) {
        floor.push("*");
        floor.unshift("*");
      } else {
        floor.push(" ");
        floor.unshift(" ");
      };
      floor = floor.join("");
    };
    tower.push(floor);
  };
  return tower;
};

/* Best practice */
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

/*

13. Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

*/

/* My solution */
function DNAStrand(dna){
  let missingPiece = [];
  dna = dna.split("");
  for (let i in dna) {
    switch(dna[i]) {
      case "A":
        missingPiece.push("T");
        break;
      case "T":
        missingPiece.push("A");
        break;
      case "C":
        missingPiece.push("G");
        break;
      case "G":
        missingPiece.push("C");
        break;
      default:
        //do nothing;
    };
  };
  return missingPiece.join("");
};

/* Best practice */
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

/*

14. The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
What if the string is empty ? Then the result should be empty object literal { }

*/

/* My solution */
const count = string => {  
  let result = {};
  string = string.split("");
  for (let i in string) result[string[i]] ? result[string[i]]++ : result[string[i]] = 1;
  return result;
};

/* Best practice */
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
};

/*

15. Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".

*/

/* My solution & Best practice */ 
const arithmetic = (a, b, operator) => {
  if (typeof a === "number" && typeof b === "number") {
    switch(operator) {
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "add":
        return a + b;
      default:
        console.log("Invalid operator provided.");
        return undefined;
    };
  } else {
    console.log("Argument a or b was not a number.")
    return NaN;
  };
};

/*

16. Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer

*/

/* My solution */
function squareDigits(num){
  num = num.toString().split("");
  let squaredNum = num.map(digit => (Number(digit)*Number(digit)).toString())
  return Number(squaredNum.join(""));
};

/* Best practice */

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

/*

17. Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
Example:
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

*/

/* My solution DID NOT PASS TESTS */ 
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.attack = function(defender) {
    defender.health -= damagePerAttack
    return defender.health > 0 ? "Defender survived" : "Defender defeated";
  };
};
function declareWinner(fighter1, fighter2, firstAttacker) {
  let firstAttackersTurn = true;
  while (fighter1.health > 0 && fighter2.health > 0) {
    let offender;
    let defender;
    if (firstAttackersTurn) {
      if (firstAttacker === fighter1.name) {
        offender = fighter1;
        defender = fighter2;
      } else {
        offender = fighter2;
        defender = fighter1;
      };
    } else {
      if (firstAttacker === fighter1.name) {
        offender = fighter2;
        defender = fighter1;
      } else {
        offender = fighter1;
        defender = fighter2;
      };
    };
    const battleResult = offender.attack(defender);
    if (battleResult === "Defender survived") {
      firstAttackersTurn ? (firstAttackersTurn = false) : (firstAttackersTurn = true);
    } else if(battleResult === "Defender defeated"){
      return offender.name;
    };
  };
};

/* Best practice */
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

/*

18. We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4].
Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

*/

/* My solution */
const vowels = {
  en: ["A","E","I","O","U","Y","a","e","i","o","u","y"]
};
const vowelIndicesEN = word => {
  word = word.split("");
  let indices = [];
  for (let i in word) {
    for (let j in vowels.en) {
      if (word[i] === vowels.en[j]) indices.push(Number(i)+1);
    };
  };
  return indices;
};

/* Best practice */
function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}

/*

19. Your task is to write function findSum.
Upto and including n, this function will return the sum of all multiples of 3 and 5.
For example:
findSum(5) should return 8 (3 + 5)
findSum 10) should return 33 (3 + 5 + 6 + 9 + 10)

*/

/* My solution & Best practice */
const findSum = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return sum;
};

/*

20. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

/* My solution & Best practice */
const solution = (str, ending) => str.endsWith(ending);

/*

21. Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples

Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays

If we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).
If a or b are nil (or null or None), the problem doesn't make sense so return false.
If a or b are empty then the result is self-evident.
a or b are empty or not empty lists.
*/

/* My solution */
const comp = (array1, array2) => {
  if (array1 && array2) {
    let array1Copy = [...array1];
    let matchCount = 0;
    for (let i in array2) {
      const root = Math.sqrt(array2[i]);
      if (array1Copy.includes(root)) {
        array1Copy.splice(array1Copy.indexOf(root),1);
        matchCount++;
      };
    };
    return matchCount === array1.length;
  } else return false;
};

/* Best practice */
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

/*

22. A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

*/

/* My solution & Best practice */
const dataReverse = data => {
  let result = [];
  for (let i = 0; i < data.length - 1; i += 8) {
    const bit = data.slice(i, i + 8);
    result.unshift(...bit);
  };
  return result;
};

/*

23. Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, the return value must be 0.

Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

*/

/* My solution & Best practice */
const longestPalindrome = str => {
  if (str.length === 0) return 0
  else {
    let maxPalindromeLength = 1;
    for (let i = 0; i <= str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const check = str.substring(i,j);
        const reversed = check.split("").reverse().join("");
        if (check === reversed && check.length > maxPalindromeLength) maxPalindromeLength = check.length;
      };
    };
    return maxPalindromeLength;
  };
};

/*

24. Replace With Alphabet Position

Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

*/

/* My solution */
const alphabetIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabetPosition = text => {
  return text.split("").map((letter, lIndex) => {
    letter = letter.toLowerCase();
    const alphaCharacter = /[a-z]/;
    if (alphaCharacter.test(letter)) {
      let index = alphabetIndex.findIndex(indexedLetter => indexedLetter === letter);
      return index + 1 + " ";
    };
  }).join("").trim();
}

/* Best practice */
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

/*

25. Consonant value

-- We shall assign the following values: a = 1, b = 2 ... z = 26.

For example, for the word "zodiacs", solve("zodiacs") = 26
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
Vowels are are a,e,i,o,u.

*/

/* My solution */
const alphabetIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];

const solve = str => {
  let highestValue = 0;
  let currentValue = 0;
  str.split("").forEach(char => {
    if (!vowels.includes(char)) {
      const indexValue = alphabetIndex.findIndex(alphaChar => alphaChar === char) + 1;
      currentValue += indexValue;
      if (currentValue > highestValue) highestValue = currentValue;
    } else currentValue = 0;
  });
  return highestValue;
};

/* Best practice */
const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);

/*

26. Array Helpers

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example

var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]

*/

/* My solution */
// Array.prototype.square = function() {
//   let squaredArray = [];
//   for (let i = 0; i < this.length; i++) squaredArray.push(this[i] * this[i]);
//   return squaredArray;
// };
// Array.prototype.cube = function() {
//   let cubedArray = [];
//   for (let i = 0; i < this.length; i++) cubedArray.push(this[i] * this[i] * this[i]);
//   return cubedArray;
// };
// Array.prototype.average = function() {
//   let numerator = 0;
//   for (let i = 0; i < this.length; i++) numerator += this[i];
//   return numerator / this.length;
// };
// Array.prototype.sum = function() {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) sum += this[i];
//   return sum;
// };
// Array.prototype.even = function() {
//   let evenValues = [];
//   for (let i = 0; i < this.length; i++) if (this[i] % 2 === 0) evenValues.push(this[i]);
//   return evenValues;
// };
// Array.prototype.odd = function() {
//   let oddValues = [];
//   for (let i = 0; i < this.length; i++) if (this[i] % 2 !== 0) oddValues.push(this[i]);
//   return oddValues;
// };

// There is no Best practice. Extending built-in prototypes should be avoided at all costs. This is giving developers a loaded gun and teaching them how to pull the trigger, while telling them to look down the barrel to make sure the bullet comes out.

/*

27. Find the odd int
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

*/

/* My solution */
const findOdd = array => {
  let result;
  let count = {
    value: 1,
    isOdd: () => count.value % 2 !== 0,
    check: (num1, num2, indexOfNum1, indexOfNum2) => { if (num1 === num2 && indexOfNum1 !== indexOfNum2) count.value++ },
    reset: () => count.value = 1
  };
  array.forEach((iNum, i) => {
    array.forEach((jNum, j) => count.check(iNum, jNum, i, j));
    if (count.isOdd()) result = iNum;
    else count.reset();
  });
  return result;
};

/* Best practice */
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

/*

28. Vasya - Clerk
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

/* My solution */
class BillSlot {
  constructor(billType) {
    this.value = billType,
    this.count = 0,
    this.updateCount = (operator, count) => {
      this.count = eval(this.count + operator + count);
      cashRegister.balance.update(this.value, operator);
    }
  }
}

let cashRegister = {
  25: new BillSlot(25),
  50: new BillSlot(50),
  100: new BillSlot(100),
  balance: {
    value: 0,
    update: (bill, operator) => cashRegister.balance.value = eval(cashRegister.balance.value + operator + bill)
  },
  checkForChange: bill => {
    let instruction = {
      isEnoughChange: false,
      billsToDispense: [
        {type: 25, count: 0},
        {type: 50, count: 0}
      ]
    };
    if (bill === 25) instruction.isEnoughChange = true;
    else if (bill === 50 && cashRegister[25].count > 0) {
      instruction.isEnoughChange = true;
      instruction.billsToDispense[0].count = 1;
    } else if (bill === 100) {
      if (cashRegister[50].count > 0 && cashRegister[25].count > 0) {
        instruction.isEnoughChange = true;
        instruction.billsToDispense[0].count = 1;
        instruction.billsToDispense[1].count = 1;
      } else if (cashRegister[25].count >= 3) {
        instruction.isEnoughChange = true;
        instruction.billsToDispense[0].count = 3;
      };
    };
    return instruction;
  },
  acceptPayment: (payment, change) => {
    cashRegister[payment].updateCount("+", 1);
    change.forEach(bill => cashRegister[bill.type].updateCount("-", bill.count));
  },
  checkout: () => {
    const totalEarned = cashRegister.balance.value;
    const billCounts = {
      25: cashRegister[25].count,
      50: cashRegister[50].count,
      100: cashRegister[100].count,
    };
    cashRegister.balance.value = 0;
    cashRegister[25].count = 0;
    cashRegister[50].count = 0;
    cashRegister[100].count = 0;
    return { totalEarned, billCounts };
  }
};

const tickets = peopleInLine => {
  let canSellToAll = true;
  peopleInLine.forEach(customer => {
    if (canSellToAll) {
      const bill = customer;
      const changeCheck = cashRegister.checkForChange(bill);
      if (changeCheck.isEnoughChange) cashRegister.acceptPayment(bill, changeCheck.billsToDispense);
      else canSellToAll = false;
    };
  });
  cashRegister.checkout();
  return canSellToAll ? "YES" : "NO";
};

/*

29. Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?

Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

Examples
balance("!!","??") === "Right"
balance("!??","?!!") === "Left"
balance("!?!!","?!?") === "Left"
balance("!!???!????","??!!?!!!!!!!") === "Balance"

*/

/* My solution */
const balance = (left, right) => {
  const getWeightFor = string => {
    const exclamationWeight = (string.match(/!/g) || []).length * 2;
    const questionWeight = (string.match(/\?/g) || []).length * 3;
    const totalWeight = exclamationWeight + questionWeight;
    return totalWeight;
  };
  const leftWeight = getWeightFor(left);
  const rightWeight = getWeightFor(right);
  if (leftWeight > rightWeight) return "Left";
  else if (leftWeight < rightWeight) return "Right";
  else return "Balance";
};

/*

30. Highest Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

*/

/* My solution */
const getHighestScoringWord = str => {
  let highestScoringWord = "";
  let highestScore = 0;
  str.split(" ").forEach(word => {
    let score = 0;
    word.split("").forEach(letter => {
      const value = letter.charCodeAt(0) - 96;
      score += value;
    });
    if (score > highestScore) {
      highestScoringWord = word;
      highestScore = score;
    };
  });
  return highestScoringWord;
};

/*

31. Directions Reduction

Once upon a time, on a way through the old wild west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed the desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or

{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or

[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or

{ "WEST" }
or

[West]
Other examples:

In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
See more examples in "Sample Tests:"

Notes

Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

*/

/* Best practice */

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
};

/*

32. Equal Sides Of An Array
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

*/

/* My solution */
const findEvenIndex = arr => {
  let result = -1;
  for (let N = 0; N < arr.length; N++) {
    const sumLeft = N !== 0 ? arr.slice(0, N).reduce((acc, cur) => acc + cur) : 0;
    const sumRight = N !== arr.length - 1 ? arr.slice(N + 1, arr.length).reduce((acc, cur) => acc + cur) : 0;
    if (sumLeft === sumRight) {
      result = N;
      break;
    };
  };
  return result;
};

/*

33. Consecutive strings

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note

consecutive strings : follow one after another without an interruption

*/

/* My solution */
const longestConsec = (strarr, k) => {
  if (k <= 0 || k > strarr.length || strarr.length === 0) return "";
  else if (k === strarr.length) return strarr.join(""); 
  else {
    let longestConsecStr = strarr.slice(0, k).join("");
    for (let i = 0; i < strarr.length - (k - 1); i++) {
      const thisStr = strarr.slice(i, k + i).join("");
      if (thisStr.length > longestConsecStr.length) longestConsecStr = thisStr;
    };
    return longestConsecStr;
  };
};

/*

34. Give me a Diamond

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples

A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is: " *\n ***\n*****\n ***\n *\n"

*/

/* My solution */
const diamond = n => {
  const median = ((n - 1) / 2) + 1;
  let gem = [];
  if (n % 2 === 0 || n < 1) return null;
  for (let i = median; i >= 1; i--) {
    const leftEdge = new Array(median - i).fill(" ").join("");
    const crystal = new Array((i * 2) - 1).fill("*").join("");
    const rightEdge = "\n";
    const halfKarat = leftEdge + crystal + rightEdge;
    gem.push(halfKarat);
    if (i < median) gem.unshift(halfKarat);
  };
  return gem.join("");
};

/*

35. Reverse every other word in the string

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

*/

/* My solution */
const reverse = str => str.split(" ").map((word, index) => {
  if (index % 2 !== 0) word = word.split("").reverse().join("");
  return word;
}).join(" ").trim();

/* 36. Multi-tap Keypad Text Entry on an Old Mobile Phone

Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

*/

/* My solution */
const pressIndex = {
  1: /[ *#1adgjmptw]/i,
  2: /[0behknqux]/i,
  3: /[cfilorvy]/i,
  4: /[2-68sz]/i,
  5: /[79]/
};

const presses = phrase => {
  let numPresses = 0;
  phrase.split("").forEach(char => {
    if (pressIndex["1"].test(char)) numPresses++;
    else if (pressIndex["2"].test(char)) numPresses += 2;
    else if (pressIndex["3"].test(char)) numPresses += 3;
    else if (pressIndex["4"].test(char)) numPresses += 4;
    else if (pressIndex["5"].test(char)) numPresses += 5;
  });
  return numPresses;
};

/*

37. Decipher this!

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

*/

/* My solution */
const decipherThis = str => {
  let decodedStr = "";
  str.split(" ").forEach(word => {
    let firstChar;
    let arrivedAtSecondChar = false;
    let elementsToRemove;
    word += " ";
    word.split("").forEach((char, index) => {
      if (char.match(/\d/) && arrivedAtSecondChar) arrivedAtSecondChar = false;
      if (!char.match(/\d/) && !arrivedAtSecondChar) {
        arrivedAtSecondChar = true;
        firstChar = String.fromCharCode(Number(word.slice(0, index)));
        elementsToRemove = index;
      };
    });
    word = word.trim();
    word = word.split("");
    word.splice(0, elementsToRemove, firstChar);
    if (word.length > 2 ) {
      const secondChar = word[1];
      const lastChar = word[word.length - 1];
      word.splice(1, 1, lastChar);
      word.splice(word.length - 1, 1, secondChar);
    }
    word.push(" ");
    word = word.join("");
    decodedStr += word;
  });
  decodedStr = decodedStr.trim();
  return decodedStr;
}; 

/* Best practice */
function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}

/*

38. Unwanted dollars

If you're faced with an input box, like this:

                                           +--------------+
  Enter the price of the item, in dollars: |              |
                                           +--------------+
do you put the $ sign in, or not? Inevitably, some people will type a $ sign and others will leave it out. The instructions could be made clearer - but that won't help those annoying people who never read instructions anyway.

A better solution is to write code that can handle the input whether it includes a $ sign or not.

So, we need a simple function that converts a string representing a number (possibly with a $ sign in front of it) into the number itself.

Remember to consider negative numbers (the - sign may come either before or after the $ sign, if there is one), and any extraneous space characters (leading, trailing, or around the $ sign) that the users might put in. You do not need to handle trailing characters other than spaces (e.g. "1.2 3"). If the given string does not represent a number, (either with or without a $ sign), return 0.0 .
*/

/* My solution */
/* One-liner */ 
// const money_value = str => !isNaN(Number.parseFloat(str.replace(/[\$ ]/g, ""))) ? Number.parseFloat(str.replace(/[\$ ]/g, "")) : 0.0;

/* Readable */
const money_value = str => {
  const dollarsAndSpaces = /[\$ ]/g;
  const withNothing = "";
  const cleanStr = str.replace(dollarsAndSpaces, withNothing);
  const num = Number.parseFloat(cleanStr);
  const numIsANumber = !isNaN(num);
  if (numIsANumber) return num;
  else return 0.0;
};

/* Best practice */
const money_value = s => +s.replace(/\s|\$/g, '') || 0;

/*

39. Sort the odd

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/

/* My solution */
const sortArray = arr => {
  if (arr.length > 0) {
    let oddInts = arr.filter(int => int % 2 === 1 ? int : null).sort((a, b) => a - b);
    console.log(oddInts);
    arr.forEach((int, index) => {
      if (int % 2 === 1) {
        arr.splice(index, 1, oddInts[0]);
        oddInts.shift();
      };
    });
  };
  return arr;
};

/* Best practice */
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

/*

40. Transform To Prime

Task :

Given a List [] of n integers , find minimum mumber to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes

List size is at least 2 .
List's numbers will only positives (n > 0) .
Repeatition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .
Input >> Output Examples

1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:

Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make *the sum of the List** equal the closest prime number (7)* .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:

Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make *the sum of the List** equal the closest prime number (37)* .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:

Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make *the sum of the List** equal the closest prime number (191)* .

*/

/* My solution */
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) if(num % i === 0) return false; 
  return num > 1;
}

const minimumNumber = numbers => {
  const sum = numbers.reduce((x, y) => x + y);
  if (isPrime(sum)) return 0;
  else {
    let key;
    let i = sum + 1;
    while (!key) {
      if (isPrime(i)) key = i - sum;
      else i++;
    };
    return key;
  };
};

/*

41. Closest and Smallest

Input

a string strng of n positive numbers (n = 0 or n >= 2)
Let us call weight of a number the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1.

Two numbers are "close" if the difference of their weights is small.

Task:

For each number in strng calculate its "weight" and then find two numbers of strng that have:

the smallest difference of weights ie that are the closest
with the smallest weights
and with the smallest indices (or ranks, numbered from 0) in strng
Output:

an array of two arrays, each subarray in the following format:
[number-weight, index in strng of the corresponding number, original corresponding number instrng]

or a pair of two subarrays (Haskell, Clojure, FSharp) or an array of tuples (Elixir, C++)

or a (char*) in C mimicking an array of two subarrays or a string

or a matrix in R (2 rows, 3 columns, no columns names)

The two subarrays are sorted in ascending order by their number weights if these weights are different, by their indexes in the string if they have the same weights.

Examples:

Let us call that function closest

strng = "103 123 4444 99 2000"
the weights are 4, 6, 16, 18, 2 (ie 2, 4, 6, 16, 18)

closest should return [[2, 4, 2000], [4, 0, 103]] (or ([2, 4, 2000], [4, 0, 103])
or [{2, 4, 2000}, {4, 0, 103}] or ... depending on the language)
because 2000 and 103 have for weight 2 and 4, ther indexes in strng are 4 and 0.
The smallest difference is 2.
4 (for 103) and 6 (for 123) have a difference of 2 too but they are not 
the smallest ones with a difference of 2 between their weights.
....................

strng = "80 71 62 53"
All the weights are 8.
closest should return [[8, 0, 80], [8, 1, 71]]
71 and 62 have also:
- the smallest weights (which is 8 for all)
- the smallest difference of weights (which is 0 for all pairs)
- but not the smallest indices in strng.
....................

strng = "444 2000 445 544"
the weights are 12, 2, 13, 13 (ie 2, 12, 13, 13)

closest should return [[13, 2, 445], [13, 3, 544]] or ([13, 2, 445], [13, 3, 544])
or [{13, 2, 445}, {13, 3, 544}] or ...
444 and 2000 have the smallest weights (12 and 2) but not the smallest difference of weights;
they are not the closest.
Here the smallest difference is 0 and in the result the indexes are in ascending order.
...................

closest("444 2000 445 644 2001 1002") --> [[3, 4, 2001], [3, 5, 1002]] or ([3, 4, 2001], 
[3, 5, 1002]]) or [{3, 4, 2001}, {3, 5, 1002}] or ...
Here the smallest difference is 0 and in the result the indexes are in ascending order.
...................

closest("239382 162 254765 182 485944 468751 49780 108 54")
The weights are: 27, 9, 29, 11, 34, 31, 28, 9, 9.
closest should return  [[9, 1, 162], [9, 7, 108]] or ([9, 1, 162], [9, 7, 108]) 
or [{9, 1, 162}, {9, 7, 108}] or ...
108 and 54 have the smallest difference of weights too, they also have 
the smallest weights but they don't have the smallest ranks in the original string.
..................

closest("54 239382 162 254765 182 485944 468751 49780 108")
closest should return  [[9, 0, 54], [9, 2, 162]] or ([9, 0, 54], [9, 2, 162])
or [{9, 0, 54}, {9, 2, 162}] or ...

*/

/* My solution */
const closest = str => {
  let result = [];
  if (str) {
    
    /* Build objects */
    const arr = str.split(" ");
    const objs = arr.map((num, index) => {
      let weight = num.split("").reduce((x, y) => Number(x) + Number(y));
      weight = Number(weight);
      num = Number(num);
      return { index, num, weight };
    });
    const byWeightAndIndex = (x, y) => {
      const weightDiff = x.weight - y.weight;
      if (weightDiff !== 0) return weightDiff;
      else return x.index - y.index;
    };
    
    /* Define task keys */
    const sortedObjs = objs.sort(byWeightAndIndex);
    let minDiff = sortedObjs[1].weight - sortedObjs[0].weight;
    let smallestObj = sortedObjs[0];
    let nextSmallestObj = sortedObjs[1];

    /* Execute task */
    sortedObjs.forEach((obj, index) => {
      const nextObj = sortedObjs[index + 1];
      if (nextObj) { /* nextObj will be undefined for the last element in sortedObjs */
        const diff = nextObj.weight - obj.weight;
        if (diff < minDiff) {
          minDiff = diff;
          smallestObj = obj;
          nextSmallestObj = nextObj;
        };
      };
    });

    /* Package and ship result */
    result = [
      [smallestObj.weight, smallestObj.index, smallestObj.num],
      [nextSmallestObj.weight, nextSmallestObj.index, nextSmallestObj.num]
    ];
  }
  return result;
};

/* 42. Battle ships: Sunk damaged or not touched? */

/* My solution */

const damagedOrSunk = (board, attacks) => {

  /* Survey the battlefield */
  let battleships = {};
  board = board.map(row => row.map(sector => {
    sector = {
      isOccupied: sector !== 0,
      occupyingBattleship: sector !== 0 ? sector : null
    };
    if (sector.isOccupied) {
      if (battleships[sector.occupyingBattleship]) battleships[sector.occupyingBattleship].size++;
      else battleships[sector.occupyingBattleship] = {
        isHit: false,
        isSunk: false,
        numHits: 0,
        size: 1
      };
    };
    return sector;
  }));

  /* Battle */
  attacks.forEach(coordinates => {
    const xCoord = coordinates[0] - 1;
    const yCoord = board.length - coordinates[1];
    const sector = board[yCoord][xCoord];
    if (sector.isOccupied) {
      const battleship = battleships[sector.occupyingBattleship];
      battleship.numHits++;
      battleship.isHit = true;
      if (battleship.size === battleship.numHits) battleship.isSunk = true;
      battleships[sector.occupyingBattleship] = battleship;
    };
  });

  /* Debrief */
  let analysis = { sunk: 0, damaged: 0, notTouched: 0, points: 0 };
  Object.entries(battleships).forEach(battleship => {
    const ship = battleship[1];
    if (ship.isSunk) analysis.sunk++;
    else if (ship.isHit) analysis.damaged++;
    else analysis.notTouched++;
  });
  analysis.points = analysis.sunk + (analysis.damaged / 2) - analysis.notTouched;

  return analysis;
};

/*

43. Advanced Pig Latin

Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

*/

/* My solution */
const translate = sentence => {

  /* Define keys */
  const capital = /[A-Z]/;
  const vowel = /[aeiou]/i;
  const punctuation = /\W/;
  let translatedSentence = [];
  sentence.split(" ").forEach(word => {
    let translatedWord = [];
    let suffix;
    let reachedFirstVowel = false;
    const firstCharWasCapitalized = capital.test(word.charAt(0));

    /* Perform task */
    word.split("").forEach((char, index) => {
      if (!reachedFirstVowel) {
        if (vowel.test(char)) {
          reachedFirstVowel = true;
          if (firstCharWasCapitalized) translatedWord.push(char.toUpperCase());
          else translatedWord.push(char.toLowerCase());
          if (index === 0) suffix = "way";
          else suffix += "ay";
        } else {
          if (suffix) suffix += char.toLowerCase();
          else suffix = char.toLowerCase();
        };
      } else {
        if (punctuation.test(char)) suffix += char;
        else translatedWord.push(char);
      };
    });
    translatedWord.push(suffix);
    translatedSentence.push(translatedWord.join(""));
  });

  /* Package and ship */
  return translatedSentence.join(" ");
};

/*

44. Alphabet wars - nuclear strike

There is a war and nobody knows - the alphabet war!
The letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them.

Task

Write a function that accepts battlefield string and returns letters that survived the nuclear strike.

The battlefield string consists of only small letters, #,[ and ].
The nuclear shelter is represented by square brackets []. The letters inside the square brackets represent letters inside the shelter.
The # means a place where nuclear strike hit the battlefield. If there is at least one # on the battlefield, all letters outside of shelter die. When there is no any # on the battlefield, all letters survive (but do not expect such scenario too often ;-P ).
The shelters have some durability. When 2 or more # hit close to the shelter, the shelter is destroyed and all letters inside evaporate. The 'close to the shelter' means on the ground between the shelter and the next shelter (or beginning/end of battlefield). The below samples make it clear for you.
Example

abde[fgh]ijk     => "abdefghijk"  (all letters survive because there is no # )
ab#de[fgh]ijk    => "fgh" (all letters outside die because there is a # )
ab#de[fgh]ij#k   => ""  (all letters dies, there are 2 # close to the shellter )
##abde[fgh]ijk   => ""  (all letters dies, there are 2 # close to the shellter )
##abde[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
#ab#de[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
#abde[fgh]i#jk[mn]op => "mn" (letters from the second shelter survive, there is only 1 # close)
[a]#[b]#[c]  => "ac"
[a]#b#[c][d] => "d"
[a][b][c]    => "abc"
##a[a]b[c]#  => "c"

*/

/* My solution */
const alphabetWar = battlefield => {
  const nuclearStrike = '#';
  const shelterLeft = '[';
  const shelterRight = ']';
  if (!battlefield.includes(nuclearStrike)) return battlefield.replace(/[[\]]/g, '');
  else {
    const map = battlefield.split('');
    let shelters = [];
    let shelterSector = undefined;
    map.forEach((obj, sector) => {
      if (obj === shelterLeft) shelterSector = sector + 1;
      if (obj === shelterRight) {
        shelters.push(battlefield.substring(shelterSector, sector));
        shelterSector = undefined;
      };
    });
    console.log(shelters);
  };
};

const newLine = '\n';
console.log(
  newLine,
  alphabetWar('abde[fgh]ijk') + newLine,
  alphabetWar('ab#de[fgh]ijk') + newLine,
  alphabetWar('ab#de[fgh]ij#k') + newLine,
  alphabetWar('##abde[fgh]ijk') + newLine,
  alphabetWar('##abde[fgh]') + newLine,
  alphabetWar('##abcde[fgh]') + newLine,
  alphabetWar('abcde[fgh]') + newLine,
  alphabetWar('##abde[fgh]ijk[mn]op') + newLine,
  alphabetWar('#abde[fgh]i#jk[mn]op') + newLine,
  alphabetWar('[ab]adfd[dd]##[abe]dedf[ijk]d#d[h]#') + newLine,
  alphabetWar('[a]#[b]#[c]') + newLine,
  alphabetWar('[a]#b#[c][d]') + newLine,
  alphabetWar('[a][b][c]') + newLine,
  alphabetWar('##a[a]b[c]#')
);