function pairElement(str) {
	let pairs = [...str.split('')];
	let matches = [];
	for (let i = 0; i < pairs.length; i++) {
		let char = pairs[i];
		if (char === 'G') matches.push(['G','C'])
		if (char === 'A') matches.push(['A','T'])
		if (char === 'T') matches.push(['T','A'])
		if (char === 'C') matches.push(['C','G'])
	}
	return matches
  }

