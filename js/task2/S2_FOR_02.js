// S2_FOR_02

function findFirstEven(nums) {
    for (let n of nums) {
        if (n % 2 === 0) {
            return n;
        }
    }
    return null; // found nothing
}

console.log(findFirstEven([1, 3, 5, 8, 10]));
console.log(findFirstEven([1, 3, 5]));