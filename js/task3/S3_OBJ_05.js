// S3_OBJ_05

function invert(obj) {
    const result = {};
    
    for (let key in obj) {
        let val = obj[key];
        // if collision, create array (optional requirement, but good to handle)
        if (result[val]) {
             if (!Array.isArray(result[val])) {
                 result[val] = [result[val]];
             }
             result[val].push(key);
        } else {
            result[val] = key;
        }
    }
    return result;
}

console.log(invert({ a: "1", b: "2", c: "1" }));