// Måte 1:
// Endrer på den originale listen. Bryter med "immutability"-prinsippet i funksjonell programmering
var list = [1, 2, 3];
var list2 = doubleElementsInList(list);

function doubleElementsInList(someList) {
		var newList = [];
		for (let i = 0; i < someList.length; i++) {
				list[i] *= 2;
		}
		return list;
}


// Måte 2:
// Denne endrer ikke på den originale listen
var list = [1, 2, 3];
var list2 = doubleElementsInList(list);

function doubleElementsInList(someList) {
		var newList = [];
		for (let number of someList) {
				newList.push(number * 2);
		}
		return newList;
}

// Måte 3:
var list = [1, 2, 3];
var list2 = doubleElementsInList(list);

function doubleElementsInList(someList) {
		return someList.map(n=>n*2);
}

// Måte 4:

var list = [1, 2, 3];
var list2 = doubleElementsInList(list);

var doubleElementsInList = list => list.map(n => n * 2);