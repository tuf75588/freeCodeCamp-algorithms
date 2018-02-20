function sumAll(arr) {
  let holder = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    holder.push(i);
  }
  return holder.reduce((a, b) => a + b);
}

sumAll([1, 4]);
