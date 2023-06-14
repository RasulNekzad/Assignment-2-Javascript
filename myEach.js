function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let array = [1,2,3,4,5];

function log(element) {
    console.log(element);
}

myEach(array, log); // Output = 1 \n 2 \n 3 \n 4 \n 5