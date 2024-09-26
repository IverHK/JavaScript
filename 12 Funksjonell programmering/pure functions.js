// Eksempel på funksjon som ikke er pure, fordi den har side-effekter - og fordi
// den ikke gir samme output hver gang du kaller den med samme input. 
let counter = 0;

function count() {
		counter++;
		document.getElementById('counter').innerHTML = counter;
}

// // pure function
// It takes an input (number) and returns an output (number + 1), which will always be the same for the same input.
// It does not modify any external state or interact with the outside world (e.g., no DOM manipulation, no global variables).
// No side effects are present.

function countOne(number) {
		return number + 1;
}