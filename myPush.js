function myPush(array, elementToAdd) {
    // let moddedArray = new Array(array.length + 1);
    // for (let i = 0; i < array.length; i++) {
    //     moddedArray[i] = array[i];
    // }
    // moddedArray[array.length] = elementToAdd;
    // return moddedArray;         // Without spread operator
    
    return [...array, elementToAdd];  // With spread operator 
}

let array = [1,2,3,4,5];

array = myPush(array, 6);

console.log(array); // Output = [1,2,3,4,5,6]