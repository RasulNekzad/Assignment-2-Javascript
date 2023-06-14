Object.grabValues = obj => {
    let valArray = [];
    for (key in obj) {
        valArray.push(obj[key]);
    }
    return valArray;
}

let obj = {"A": 1, "B": 2, "C": 3, "D": 4, "E": 5};

let values = Object.grabValues(obj);

console.log(values); // Output = [1, 2, 3, 4, 5]