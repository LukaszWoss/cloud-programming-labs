// S3_FN_04

const nums = [1, 2, 3, 4, 5, 6];

const result = nums
    .filter(n => n % 2 === 0) // only evens: 2, 4, 6
    .map(n => n * n)          // squares: 4, 16, 36
    .reduce((sum, n) => sum + n, 0); // sum: 56

console.log(result);