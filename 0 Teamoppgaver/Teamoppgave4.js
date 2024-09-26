function buyCoke() {
	let value = valueFromCoinCounts(coinsInserted)
	console.log(coinsInMachine)
	if (value >=25 && cokesInStore>0){
			cokesInStore--;
			isCokeInDelivery = true;
			let returnedValue = value - 25;
			for (let i=0;i<coinsInMachine.length;i++){
					coinsInMachine[i] += coinsInserted[i]
			} 
			for(let i=0;i<=returnedValue;i++){
					if (returnedValue>=20){
							coinsInMachine[3]--;
							coinsReturned[3]++;
							returnedValue -= 20;
					}
					else if (returnedValue>=10){
							coinsInMachine[2]--;
							coinsReturned[2]++;
							returnedValue -= 10;
					}
					else if (returnedValue>=5){
							coinsInMachine[1]--;
							coinsReturned[1]++;
							returnedValue -= 5;
					}
					else if (returnedValue>=1){
							coinsInMachine[0]--;
							coinsReturned[0]++;
							returnedValue -= 1;
					}
			}
			coinsInserted = [0,0,0,0]
	}
	else{
			errorMessage = 'Putt på mer penger'
	}
	updateView();
}



function insertCoin(value) {
	if (value==20){
			coinsInserted[3]++;
	}
	else if(value==10){
			coinsInserted[2]++;
	}
	else if(value==5){
			coinsInserted[1]++
	}
	else if(value==1){
			coinsInserted[0]++
	}
	updateView();
}

function returnCoins() {
	coinsReturned = [...coinsInserted];
	coinsInserted = [0, 0, 0, 0];
	updateView();
}

function takeCoins() {
	coinsReturned = [0, 0, 0, 0];
	updateView();
}

function takeCoke(){
	isCokeInDelivery = false
	updateView()
}