Object.grabKeys = obj => {
    let keyArray = [];
    for (key in obj) {
        keyArray.push(key);
    }
    return keyArray;
}

let obj = {"A": 1, "B": 2, "C": 3, "D": 4, "E": 5};

let keys = Object.grabKeys(obj);

console.log(keys); // Output = ["A", "B", "C", "D", "E"]