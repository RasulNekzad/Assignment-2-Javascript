function myIncludes(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return true;
        }
    }
    return false;
}

let array = [1,2,3,4,5];

let includesFive = myIncludes(array, 5);

console.log(includesFive); // Output = true