// S3_FN_03

const makeAdder = x => y => x + y;

const add5 = makeAdder(5);
console.log(add5(10)); // 15
console.log(add5(2));  // 7