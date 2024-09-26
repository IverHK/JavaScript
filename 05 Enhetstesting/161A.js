


function fixText (inputText){
	let letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let currentText = inputText.trim();
	if (letter.includes(currentText[0])){
		let firstLetterInCapital = currentText[0].toUpperCase();
		currentText = currentText.slice(1);
		currentText=firstLetterInCapital+currentText.toLowerCase();
		return currentText;
	}	else currentText=currentText.trim().toLowerCase();
			return currentText;
}