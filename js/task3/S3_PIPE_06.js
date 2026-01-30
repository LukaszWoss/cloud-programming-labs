// S3_PIPE_06

function pipeSafe(...fns) {
    return (input) => {
        try {
            let result = input;
            for (let fn of fns) {
                result = fn(result);
            }
            return { ok: true, value: result };
        } catch (e) {
            return { ok: false, error: e.message };
        }
    };
}

const safeDiv = x => {
    if (x === 0) throw new Error("Zero division");
    return 10 / x;
};

const pipeline = pipeSafe(x => x - 2, safeDiv);

console.log(pipeline(4)); // (4-2)=2 -> 10/2=5 -> ok
console.log(pipeline(2)); // (2-2)=0 -> Error -> not ok