function confirmEnding(str, target) {
    let sliceLen = target.length;
    let check = str.slice(str.length - sliceLen);
    return check === target ? true : false
  }

  confirmEnding("Bastian", "n");
