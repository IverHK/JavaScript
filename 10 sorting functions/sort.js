let names = ['Per Albertsen', 'Pål Olsen', 'Anders Hansen', 'Cecilie Nilsen', 'Bertil Ås'];
sortArray(names);

function sortArray(array, compare) {
    console.log(array.join('\n'));
    let sortedNames = [];
    for (let aName of array) {
        let index = 0;
        while (index < sortedNames.length
            && sortedNames[index] < aName) {
            index++;
        }
        sortedNames.splice(index, 0, aName);
    }
    console.log(sortedNames.join('\n'));
}

