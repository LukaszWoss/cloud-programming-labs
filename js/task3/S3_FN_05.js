// S3_FN_05

const atLeast = min => n => n >= min;

const isAdult = atLeast(18);
const scores = [10, 25, 15, 30, 5];

// using the generated function in filter
const passed = scores.filter(atLeast(15));

console.log(isAdult(20)); // true
console.log(passed);