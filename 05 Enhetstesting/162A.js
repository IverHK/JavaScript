let numbers = [7, 3, 1, 5, 8];
let chosenBar=null; 
let inputValue; 
let barBorder='';
let disabledButton;
let errorMessage='';

// view
function updateView() {
}



function createBar(number, barNo) {
	const width = 8;
	const spacing = 2;
	let x = (barNo - 1) * (width + spacing);
	let height = number * 10;
	let y = 60 - height;
	let color = calcColor(1, 10, barNo);
	let barBorder = chosenBar === barNo ? 'stroke="black" stroke-width="1"' : '';
	
	return `<rect width="${width}" height="${height}"
							x="${x}" y="${y}" fill="${color}"
							${barBorder}
							onclick="clickOnBar(${barNo})"
							></rect>`;
	}
	
	function calcColor(min, max, val) {
	var minHue = 240, maxHue = 0;
	var curPercent = (val - min) / (max - min);
	var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
	return colString;
	}
	
	// controller
	function clickOnBar(chosenbar){
		chosenBar = chosenBar !== chosenbar ? chosenbar : null; 
		errorMessage='';
		// updateView();
	}
	
	function addBar(){
		if (inputValue>10 || inputValue<1){
			errorMessage = 'Invalid input, insert a number between 1-10'
		} else {
			barIndex=numbers.length+1;
			numbers.push(inputValue)
			errorMessage='';
			createBar(inputValue, barIndex)
			updateView();
			}
	}
	
	function changeBar(){
		if (inputValue>10 || inputValue<1){
			errorMessage = 'Invalid input, insert a number between 1-10'
		} else { 
			numbers[chosenBar-1]=Number(inputValue);
			errorMessage='';
			}
			updateView();
	}
	
	function removeBar(){
		numbers.splice(chosenBar-1,1)
		errorMessage='';
		updateView();
	}
	