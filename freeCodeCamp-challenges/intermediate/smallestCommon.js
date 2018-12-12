function smallestCommons(arr) {
  //get minimum and maximum values from array given using spread operator
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let candidate = max;

  //inner function using higher letiable
  let smallestCommonMultiple = function(low, high) {
    function scm(l, h) {
      if (h % l === 0) {
        return h;
      } else {
        return scm(l, h + high);
      }
    }
    return scm(low, high);
  };
  for (let i = min; i <= max; i++) {
    candidate = smallestCommonMultiple(i, candidate);
  }
  return candidate;
}
