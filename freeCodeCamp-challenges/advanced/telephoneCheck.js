function telephoneCheck(str) {
  // Good luck!
  //check if first index is less than 1.
  if (str[0] === "-" || parseInt(str[0] > 1)) return false;
  let formatted = str.replace(/[- )(]/g, "");
  if (str[0] === "1") {
    let check = [...formatted]
      .map(num => parseInt(num))
      .every(x => Number.isInteger(x));
    if (check) return true;
  }
  //if the number is less than 10 in length, don't even continue.
  if (formatted.length < 10) return false;
  //make deep copy of array to check parenthesis cases.
  return [...formatted]
    .map(num => parseInt(num))
    .every(x => Number.isInteger(x))
    ? true
    : false;
}

console.log(telephoneCheck("1-(555)-555-5555")); //should return true
console.log(telephoneCheck("555-5555")); // should return false
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false
console.log(telephoneCheck("(555)555-5555")); //should return true
