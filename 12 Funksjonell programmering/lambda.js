    // Måte 1:
    function double1(number) {
			return number * 2;
	}

	// Måte 2:
	let double2 = function (number) {
			return number * 2;
	}

	// Måte 3:
	let double3 = number => number * 2;
	let a = double3(3);
	console.log(a);