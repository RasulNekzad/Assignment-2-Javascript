function myIndexOf(array, target, startFrom) {
    for (let i = startFrom; i < array.length; i++) {
        if (array[i] == target) {
            return i;
        }
    }
    return -1;
}

let array = [1,2,3,4,5];

let indexOfFour = myIndexOf(array, 4, 0);

console.log(indexOfFour); // Output = 3