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

//My solution:
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

//Best solution:
const rowSumOddNumbers = n => Math.pow(n, 3);

/*

3. Very simple, given a number, find its opposite.

*/

//My solution
const opposite = number => number < 0 ? Math.abs(number) : number - 2 * (Math.abs(number));

//Best solution
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

//My solution
const songDecoder = song => {
  song = song.replace(/WUB/g," ").trim().split("");
  return song.map((char, index) => song[index] !== " " ? char : song[index - 1] !== " " ? char : "").join("");
};

//Best solution
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

/*

6. Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

//My solution
function oddOrEven(array) {
  if(array.length > 0) {
    const dividedSum = array.reduce((accumulator, currentValue) => accumulator + currentValue) / 2;
    return dividedSum.toString().includes(".") ? 'odd' : 'even';
  } else {
    return 'even';
  };
};

//Best solution
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
};

/*

7.Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task

Write a function that returns both the minimum and maximum number of the given list/array.

*/

//My solution
const minMax = arr => [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];

//Best solution
const minMax = arr => [Math.min(Math, arr), Math.max(Math, arr)];

/*

8. Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

//My solution
function findShort(s){
  let shortestLength = s.split(" ")[0].length;
  for (let string of s.split(" ")) {
    if (string.length < shortestLength) shortestLength = string.length;
  };
  return shortestLength;
};

//Best solution
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

/*

9. You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

//My solution
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

//Best solution
//Unknown, kata test cases were coded incorrectly.

/*

10. Your task is to make function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, function should returns 0

*/

//My solution
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

//Best solution
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

//My solution
const array_diff = (list1, list2) => {
  let result = [];
  for (let i in list1) {
    let matchFound = false;
    for (let j in list2) if (list1[i] === list2[j]) matchFound = true;
    if (!matchFound) result.push(list1[i]);
  };
  return result;
};

//Best solution
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

/*

12. Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *

*/

//My solution
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

//Best solution
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

//My solution
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

//Best solution
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
