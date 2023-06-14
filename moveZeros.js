function moveZeros(nums) {
    let zeroCounter = 0;
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            res.push(nums[i]);
        } else {
            zeroCounter++;
        }
    }
    while (zeroCounter > 0) {
        res.push(0);
        zeroCounter--;
    }
    return res;
}

let nums = [0,1,0,3,12];

console.log(moveZeros(nums)); // Output = [1,3,12,0,0]