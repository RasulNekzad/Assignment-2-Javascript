function myLastIndexOf(array, target) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == target) {
            return i;
        }
    }
    return -1;
}

let array = [1,2,3,4,5];

let lastIndexOfOne = myLastIndexOf(array, 1);

console.log(lastIndexOfOne); // Output = 0