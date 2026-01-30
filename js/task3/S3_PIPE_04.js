// S3_PIPE_04

const processData = (inputs) => {
    return inputs
        .filter(x => !Number.isNaN(Number(x))) // filter invalid
        .map(x => Number(x))                   // convert
        .map(x => x * 2)                       // double
        .reduce((sum, x) => sum + x, 0);       // sum
};

console.log(processData(["1", "2", "bad", "3"])); // 1->2, 2->4, 3->6. Sum = 12