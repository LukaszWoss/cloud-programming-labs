// S3_PIPE_02

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const inc = x => x + 1;
const double = x => x * 2;

// 5 * 2 + 1 = 11 (double first, then inc)
const func = compose(inc, double);
console.log(func(5));