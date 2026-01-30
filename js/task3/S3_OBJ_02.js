// S3_OBJ_02

function mergeDefaults(defaults, overrides) {
    // simple shallow merge using spread
    return { ...defaults, ...overrides };
}

const def = { theme: "light", timeout: 1000 };
const user = { timeout: 5000 };
console.log(mergeDefaults(def, user));