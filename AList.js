function arrayToList(array) {
    let list = {};
    for (let i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    return list;
}

function prepend(elem, list) {
    return {"value": elem, "rest": list ? list : ""};
}

function listToArray(list) {
    let array = [];
    let ptr = 0;
    while (nth(list, ptr)) {
        array.push(nth(list, ptr));
        ptr++;
    }
    return array;
}

function nth(list, pos) {
    let currentValue = list["value"];
    let ptr = 1;
    while (ptr <= pos) {
        ptr++;
        list = list["rest"];
        if (list["value"] == null) {
            return;
        }
        currentValue = list["value"];
    }
    return currentValue;
}

let array = [1,2,3,];
let res = arrayToList(array);
console.log(res) // Output = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }

console.log(nth(res, 2));  // Output = 3

console.log(listToArray(res)); // Output = [1,2,3]