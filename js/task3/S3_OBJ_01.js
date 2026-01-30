// S3_OBJ_01

function get(obj, path, fallback) {
    const parts = path.split(".");
    let current = obj;
    
    for (let part of parts) {
        if (current && current[part] !== undefined) {
            current = current[part];
        } else {
            return fallback;
        }
    }
    return current;
}

const config = { db: { host: "localhost" } };
console.log(get(config, "db.host", "127.0.0.1"));
console.log(get(config, "db.port", 5432));