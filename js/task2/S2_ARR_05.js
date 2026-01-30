// S2_ARR_05

function stats(nums) {
    if (nums.length === 0) return null;

    let min = nums[0];
    let max = nums[0];
    let sum = 0;

    for (let n of nums) {
        if (n < min) min = n;
        if (n > max) max = n;
        sum += n;
    }

    return {
        min: min,
        max: max,
        avg: sum / nums.length
    };
}

console.log(stats([10, 2, 30]));