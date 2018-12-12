let Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  const fullName = firstAndLast.split(' ');

  this.setFullName = function(firstAndLast) {
    const fullName = firstAndLast.split(' ');
    return `${fullName[0]} ${fullName[1]}`;
  };
  this.setFirstName = function(name) {
    return `${name} ${fullName[1]}`;
  };
  this.getFirstName = function() {
    return fullName[0];
  };
  this.getLastName = function() {
    return fullName[1];
  };

  this.getFullName = function() {
    return `${fullName[0]} ${fullName[1]}`;
  };

  return firstAndLast;
};

let bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setFirstName('Haskell'));
