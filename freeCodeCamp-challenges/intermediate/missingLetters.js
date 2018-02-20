function fearNotLetter(str) {
	let vals = [...str].map(val => val.charCodeAt());
	let missing = [];
	vals
	for (let i = 1; i < vals.length; i++) {
		if (vals[i] - vals[i - 1] !== 1) {
			missing.push(vals[i] - 1)
		}

	}
	return missing.length ? String.fromCharCode(missing) : undefined
  }
  // Happy Coding!