function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

let array = [1,2,3,4,5];

let someEven = mySome(array, element => element % 2 == 0);

console.log(someEven);  // Output = true