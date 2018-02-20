function translatePigLatin(str) {
    let strToArr = [...str];
    let vowels = ['a','e','i','o','u'];
    let check = strToArr.findIndex((x) => vowels.indexOf(x) !== -1);

    let chop = strToArr.slice(0,check);

    let firstLetter = str.charAt(0);
    if (vowels.indexOf(firstLetter) >= 0) return str + 'way';
    if (check === - 1) return str + 'ay'
    return strToArr.slice(check).concat(chop,'ay').join('');
  }
translatePigLatin("consonant");
