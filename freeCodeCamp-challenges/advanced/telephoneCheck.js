function telephoneCheck(str) {
  // Good luck!
  //make sure first number is at least greater than 0.
  if (str[0] === "-") return false;
  //if less than 10 characters, dont even continue
  if (str.length < 10) return false;
  let formattedArray = [...str];
  //if parens are at index 0 and 4;
  if (formattedArray.indexOf("(") === 0 && formattedArray.indexOf(")") === 4) {
    if (formattedArray.indexOf("-") === 8 || formattedArray.indexOf("") === 5) {
      let numCheck = formattedArray
        .map(num => parseInt(num))
        .filter(x => x)
        .every(num => Number.isInteger(num));
      if (numCheck) return true;
      else return false;
    }
  }
  //parens at index 2 and 6
  if (
    (formattedArray.indexOf("(") === 2 && formattedArray.indexOf(")") === 6) ||
    (formattedArray.indexOf("(") === 1 && formattedArray.indexOf(")") === 5)
  ) {
    //do some stuff
    formattedArray;
    console.log(copy.indexOf("-"));
  }
  return formattedArray;
}

console.log(telephoneCheck("1(555)-555-5555")); //should return true
console.log(telephoneCheck("555-5555")); // should return false
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false
console.log(telephoneCheck("(555)555-5555")); //should return true
console.log(telephoneCheck("10 (757) 622-7382")); //should return true
console.log(telephoneCheck("1 555)555-5555")); //should return true
console.log(telephoneCheck("1 (555) 555-5555 ")); //should return true
console.log(telephoneCheck("1(555)555-5555")); //should return true
