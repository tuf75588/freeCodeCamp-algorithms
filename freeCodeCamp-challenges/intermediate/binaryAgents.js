function binaryAgent(str) {

  return [...str.split(" ")]
    .map(num => parseInt(num, 2))
    .map(char => String.fromCharCode(char))
    .join("");
}
