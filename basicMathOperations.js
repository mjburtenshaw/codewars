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