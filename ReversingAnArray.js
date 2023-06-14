function reverseArray(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

let array = [1,2,3,4,5];
console.log(reverseArray(array)); // Output = [5,4,3,2,1]

function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}

let letterArray = ["a", "b", "c", "d", "e"];
reverseArrayInPlace(letterArray);
console.log(letterArray); // Output = ["e", "d", "c", "b", "a"]
