function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

let array = [1,2,3,4,5];

let allLessThanTen = myEvery(array, element => element < 10);

console.log(allLessThanTen); // Output = true