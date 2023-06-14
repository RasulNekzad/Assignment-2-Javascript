function myMap(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
}

let array = [1,2,3,4,5];

myMap(array, element => element*2);
console.log(array); // Output = [2,4,6,8,10]