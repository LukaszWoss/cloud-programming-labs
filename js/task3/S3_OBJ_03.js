// S3_OBJ_03

function pick(obj, keys) {
    const result = {};
    for (let key of keys) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

const user = { name: "Joe", age: 30, email: "joe@example.com" };
console.log(pick(user, ["name", "email"]));