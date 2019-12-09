let test = [
	1,
	0,
	0,
	3,
	1,
	1,
	2,
	3,
	1,
	3,
	4,
	3,
	1,
	5,
	0,
	3,
	2,
	10,
	1,
	19,
	1,
	19,
	6,
	23,
	2,
	13,
	23,
	27,
	1,
	27,
	13,
	31,
	1,
	9,
	31,
	35,
	1,
	35,
	9,
	39,
	1,
	39,
	5,
	43,
	2,
	6,
	43,
	47,
	1,
	47,
	6,
	51,
	2,
	51,
	9,
	55,
	2,
	55,
	13,
	59,
	1,
	59,
	6,
	63,
	1,
	10,
	63,
	67,
	2,
	67,
	9,
	71,
	2,
	6,
	71,
	75,
	1,
	75,
	5,
	79,
	2,
	79,
	10,
	83,
	1,
	5,
	83,
	87,
	2,
	9,
	87,
	91,
	1,
	5,
	91,
	95,
	2,
	13,
	95,
	99,
	1,
	99,
	10,
	103,
	1,
	103,
	2,
	107,
	1,
	107,
	6,
	0,
	99,
	2,
	14,
	0,
	0,
];

const decode = function(op, noun = 12, verb = 2) {
	let arr = op.slice();
	arr[1] = noun;
	arr[2] = verb;
	for (let i = 0; i < arr.length; i += 4) {
		let code = arr[i];
		let input1 = arr[arr[i + 1]];
		let input2 = arr[arr[i + 2]];
		if (code === 1) {
			arr[arr[i + 3]] = input1 + input2;
		} else if (code === 2) {
			arr[arr[i + 3]] = input1 * input2;
		} else if (code === 99) {
			break;
		}
	}
	return arr[0];
};

const decode2 = function(op) {
	let arr = [];
	while (true) {
		arr = op.slice();
		for (let i = 0; i < 100; i++) {
			for (let j = 0; j < 100; j++) {
				if (decode(arr, i, j) === 19690720) {
					return 100 * i + j;
				}
			}
		}
	}
};

console.log(decode(test));
console.log(decode2(test));
