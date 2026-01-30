// S3_OBJ_04

function omit(obj, keys) {
    const result = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

const user = { name: "Joe", age: 30, email: "joe@example.com" };
console.log(omit(user, ["age"]));