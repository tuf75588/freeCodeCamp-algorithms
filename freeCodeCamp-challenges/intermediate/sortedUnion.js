function uniteUnique(arr) {
	let copy = [...arguments];
	let firstArg = [].concat(...copy.slice(1));
	let secondArg = [].concat(...copy.slice(2))
	let final = [].concat(arr, firstArg, secondArg)
	return [...new Set(final)]
}

