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