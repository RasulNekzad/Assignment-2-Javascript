function myReduce(array, callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i]);
    }
    return acc;
}

let array = [1,2,3,4,5];
let initialValue = 0;

let sumOfArray = myReduce(array, (acc, element) => acc + element, initialValue);

let array2 = ["a","b","c"];
let concatArray = myReduce(array2, (acc, element) => acc + element, "");

console.log(sumOfArray);  // Output = 15
console.log(concatArray); // Output = "abc"