
function addTogether() {
    function checkIfNum(num) {
      return typeof num === 'number' ? num : undefined;
    }
    let a = checkIfNum(arguments[0]);
    let b = checkIfNum(arguments[1]);
    if (arguments.length > 1) {
      return a && b ? a + b : undefined;
    } else {
       if (a) {
         return function(y) {
           if (checkIfNum(y)) {
             return a + y;
           } else {
             return undefined
           }
         }
       } else {
         return undefined;
       }
    }
  }

  addTogether(2,3);
