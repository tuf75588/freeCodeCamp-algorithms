function telephoneCheck(str) {
  // Good luck!
  if (str[0] === "-") return false;
  let formattedArray = [...str];
  //if parens are at index 0 and 4;

  return formattedArray;
}

console.log(telephoneCheck("1-(555)-555-5555")); //should return true
console.log(telephoneCheck("555-5555")); // should return false
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false
console.log(telephoneCheck("(555)555-5555")); //should return true
console.log(telephoneCheck("10 (757) 622-7382")); //should return true
