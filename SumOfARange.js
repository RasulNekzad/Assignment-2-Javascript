function range(start, end) {
    if (start < end) {
        const result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    } else {
        const result = [];
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
        return result;
    }
}

console.log(range(10,5)); // Output = [10, 9, 8, 7, 6, 5]
console.log(range(5,10)); // Output = [5, 6, 7, 8, 9, 10]

function sum(array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}

let array = [1,2,3,4,5];

console.log(sum(array)); // Output = 15
console.log(sum(range(1,10))); // Output = 55