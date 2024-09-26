function doManyCalculations(calculations, startValue) {
	let value = startValue;
	for (let calculation of calculations) {
			value = calculation(value);
	}
	return value;
}

doManyCalculations(
[ n=>n*2,
	n=>n+1,
	n=>n*n
], 3);

// = 49
// tilsvarer (3*2+1)*(3*2+1)