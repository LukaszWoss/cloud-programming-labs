// S3_PIPE_01

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const inc = x => x + 1;
const double = x => x * 2;

// (5 + 1) * 2 = 12
const func = pipe(inc, double);
console.log(func(5));