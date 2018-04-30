function telephoneCheck(str) {
  // Good luck!
  //check if first index is less than 1.
  if (str[0] === '-') return false;
  let formatted = str.replace(/-|\s/g, "");
  //if the number is less than 10 in length, don't even continue.
  if (formatted.length < 10) return false;
  //make deep copy of array to check parenthesis cases.
  let formattedArray = [...formatted]
  console.log(formattedArray.indexOf('('), formattedArray.indexOf(')'))
  //if parens are at index 1 and 5, or 0 and 4 do some stuff.
  if (formattedArray.indexOf('(') === 0 && formattedArray.indexOf(')') === 4 || formattedArray.indexOf('(') === 1 && formattedArray.indexOf(')') === 5) {

  }

}

console.log(telephoneCheck("1-(555)-555-5555")); //should return true
console.log(telephoneCheck("555-5555")); // should return false
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false
console.log(telephoneCheck("(555)555-5555")); //should return true