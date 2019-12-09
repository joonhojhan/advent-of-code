const validPassword = function(min, max) {
	let count = 0;
	for (let i = min; i <= max; i++) {
		let hasAdjacent = false;
		let isIncreasing = true;
		let isLengthSix = true;
		if (String(i).length !== 6) isLengthSix = false;
		for (let j = 0; j < String(i).length; j++) {
			let char = String(i)[j];
			if (j + 1 < String(i).length) {
				if (char === String(i)[j + 1]) hasAdjacent = true;
				if (Number(String(i)[j]) > Number(String(i)[j + 1])) isIncreasing = false;
			}
		}
		if (hasAdjacent && isIncreasing && isLengthSix) {
			count++;
		}
	}
	return count;
};

const validPassword2 = function(min, max) {
	let count = 0;
	for (let i = min; i <= max; i++) {
		let hasAdjacent = false;
		let isIncreasing = true;
		let isLengthSix = true;
		let currStreak = 1;
		if (String(i).length !== 6) isLengthSix = false;
		for (let j = 0; j < String(i).length; j++) {
			let char = String(i)[j];
			if (j > 0) {
				if (char === String(i)[j - 1]) currStreak++;
				else {
					if (currStreak === 2) hasAdjacent = true;
					currStreak = 1;
				}
			}
			if (j + 1 < String(i).length) {
				if (Number(String(i)[j]) > Number(String(i)[j + 1])) isIncreasing = false;
			}
		}
		if (currStreak === 2) hasAdjacent = true;
		if (hasAdjacent && isIncreasing && isLengthSix) {
			count++;
		}
	}
	return count;
};

console.log(validPassword(273025, 767253));
console.log(validPassword2(273025, 767253));
