// S2_FOR_03

function sumUntil(nums, threshold) {
    let total = 0;
    
    for (let n of nums) {
        // if adding n exceeds threshold, stop
        if (total + n > threshold) {
            break;
        }
        total += n;
    }
    return total;
}

console.log(sumUntil([10, 20, 30], 25)); // should stop after 10+20 (exceeds) -> returns 10? Or check logic: 10 ok, 10+20=30 > 25 stop. Returns 10.
// Let's adjust logic strictly to "until sum would exceed":
// 10 + 20 = 30 > 25? Yes -> Break. Result 10.