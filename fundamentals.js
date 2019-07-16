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

// My solution:
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

// Best solution:
const rowSumOddNumbers = n => Math.pow(n, 3);

/*

3. Very simple, given a number, find its opposite.

*/

// My solution
const opposite = number => number < 0 ? Math.abs(number) : number - 2 * (Math.abs(number));

// Best solution
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

// My solution
const songDecoder = song => {
  song = song.replace(/WUB/g," ").trim().split("");
  return song.map((char, index) => song[index] !== " " ? char : song[index - 1] !== " " ? char : "").join("");
};

// Best solution
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

/*

6. Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

// My solution
function oddOrEven(array) {
  if(array.length > 0) {
    const dividedSum = array.reduce((accumulator, currentValue) => accumulator + currentValue) / 2;
    return dividedSum.toString().includes(".") ? 'odd' : 'even';
  } else {
    return 'even';
  };
};

// Best solution
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
};

/*

7.Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task

Write a function that returns both the minimum and maximum number of the given list/array.

*/

// My solution
const minMax = arr => [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];

// Best solution
const minMax = arr => [Math.min(Math, arr), Math.max(Math, arr)];

/*

8. Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

// My solution
function findShort(s){
  let shortestLength = s.split(" ")[0].length;
  for (let string of s.split(" ")) {
    if (string.length < shortestLength) shortestLength = string.length;
  };
  return shortestLength;
};

// Best solution
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

/*

9. You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

// My solution
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

// Best solution
//Unknown, kata test cases were coded incorrectly.

/*

10. Your task is to make function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, function should returns 0

*/

// My solution
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

// Best solution
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

// My solution
const array_diff = (list1, list2) => {
  let result = [];
  for (let i in list1) {
    let matchFound = false;
    for (let j in list2) if (list1[i] === list2[j]) matchFound = true;
    if (!matchFound) result.push(list1[i]);
  };
  return result;
};

// Best solution
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

/*

12. Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *

*/

// My solution
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

// Best solution
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

// My solution
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

// Best solution
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

// My solution
const count = string => {  
  let result = {};
  string = string.split("");
  for (let i in string) result[string[i]] ? result[string[i]]++ : result[string[i]] = 1;
  return result;
};

// Best solution
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

// My solution & Best solution
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

// My solution
function squareDigits(num){
  num = num.toString().split("");
  let squaredNum = num.map(digit => (Number(digit)*Number(digit)).toString())
  return Number(squaredNum.join(""));
};

// Best solution

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

// My solution DID NOT PASS TESTS
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

// Best solution
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

// My solution
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

// Best solution
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

// My solution & Best solution
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

// My solution & Best solution
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

// My solution
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

// Best solution
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
