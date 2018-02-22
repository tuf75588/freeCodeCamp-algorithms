function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    // Loop through each item in the array arr
    arr.forEach(function(item) {
      // Calculate the Orbital period value
      let tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
    return arr;
  }

  // test here
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);