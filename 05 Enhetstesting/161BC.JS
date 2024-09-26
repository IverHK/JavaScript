


function isMail(inputText){
	let mailOperator= '@';
	return inputText.includes(mailOperator) ? true : false;
}

function isEmail(inputText){
	let indexOfMiddle = inputText.indexOf('@');
	if (inputText.substring(0,indexOfMiddle).includes('.') 
		&& inputText.substring(indexOfMiddle, inputText.length).includes('.')
		&& inputText.includes('@')) {
			return true;}
	else return false;
}

