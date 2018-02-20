var Person = function(firstAndLast) {
    let fullName = firstAndLast

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

    this.setLastName = function(name) {
       return fullName = fullName.split(" ")[0] + " " + name;
      };

    this.getFirstName = function() {
        return this.getFullName().split(' ')[0];
    }
    this.getLastName = function() {
        return this.getFullName().split(' ')[1];
    }
    this.setFullName = function(name) {
        return fullName = name
    }

    this.getFullName = function() {
      return fullName;
    };
  };

var bob = new Person('Bob Ross');
bob.getFullName();
