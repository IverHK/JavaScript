// Eksempel 2 - insertion sort med sammenligningsfunksjon for etternavn


let names = ['Per Albertsen', 'Pål Olsen', 'Anders Hansen', 'Cecilie Nilsen', 'Bertil Ås'];
console.log(names.join('\n'));
names.sort(names, compareNames);
console.log(names.join('\n'));

function sortArray(array, compare) {
    console.log(array.join('\n'));
    let sortedNames = [];
    for (let aName of array) {
        let index = 0;
        while (true) {
            if (index >= sortedNames.length) break;
            let compareResult = compareNames(sortedNames[index], aName);
            if (compareResult == 1) break;
            index++;
        }
        sortedNames.splice(index, 0, aName);
    }
    console.log(sortedNames.join('\n'));
}

function compareNames(nameA, nameB) {
    const lastNameA = nameA.split(' ')[1];
    const lastNameB = nameB.split(' ')[1];
    return lastNameA < lastNameB ? -1 : 1;
}