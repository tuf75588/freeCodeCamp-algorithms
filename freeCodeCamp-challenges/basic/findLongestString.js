function findLongestWordLength(str) {
  let vals = [...str.split(" ")].map(x => x.length);
  return Math.max(...vals);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
