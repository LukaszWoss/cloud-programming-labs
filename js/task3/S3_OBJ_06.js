// S3_OBJ_06

function groupBy(items, key) {
    const result = {};
    
    for (let item of items) {
        let val = item[key];
        
        if (!result[val]) {
            result[val] = [];
        }
        result[val].push(item);
    }
    return result;
}

const data = [
    { id: 1, type: "fruit" },
    { id: 2, type: "veg" },
    { id: 3, type: "fruit" }
];
console.log(groupBy(data, "type"));