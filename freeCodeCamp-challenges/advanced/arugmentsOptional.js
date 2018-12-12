/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

let sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.
 */
function addTogether() {
  const args = [...arguments];
  const check = args.every((x) => Number.isInteger(x));
  if (!Number.isInteger(args[0])) return undefined;
  if (args.length === 2 && check) {
    return args[0] + args[1];
  }
  if (args.length === 1) {
    return function(a) {
      if (!Number.isInteger(a)) return undefined;
      return args[0] + a;
    };
  }
  return undefined;
}

let a = addTogether(2)([3]);
a;
let sumTwoAnd = addTogether(2);
let b = sumTwoAnd(3);
b;
