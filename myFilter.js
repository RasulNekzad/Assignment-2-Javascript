function myFilter(array, callback) {
    let moddedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            moddedArray.push(array[i]);
        }
    }
    return moddedArray;
}

let array = [1,2,3,4,5];

let moddedArray = myFilter(array, element => element > 2);

console.log(moddedArray); // Output = [3,4,5]