function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 != typeof obj2 || obj1 == null || obj2 == null) {
        return false;
    }

    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length != obj2Keys.length) {
        return false;
    }

    for (let i = 0; i < obj1Keys.length; i++) {
        if (!deepEqual(obj1Keys[i], obj2Keys[i]) || !deepEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]])) {
            return false;
        }
    }

    return true;
}

let obj1 = {here: {is: "an"}, object: 2};
let obj2 = {here: 1, object: 2};

console.log(deepEqual(obj1, obj1)); // Output = true
console.log(deepEqual(obj1, obj2)); // Output = false
console.log(deepEqual(obj1, {here: {is: "an"}, object: 2})); // Output = true