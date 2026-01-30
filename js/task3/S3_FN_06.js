// S3_FN_06

const mapValues = (obj, fn) => {
    const result = {};
    for (let key in obj) {
        result[key] = fn(obj[key]);
    }
    return result;
};

const prices = { apple: 2, banana: 3 };
const doubled = mapValues(prices, p => p * 2);

console.log(doubled);