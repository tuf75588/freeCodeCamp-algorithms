
function dropElements(arr, func) {
	return arr.filter(x => func(x)).length ? arr.slice(arr.findIndex(x => func(x))) : []
  }





  // Happy Coding!