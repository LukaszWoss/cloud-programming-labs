// S1_VAR_03

const user = { name: "John", tags: [] };

// mutating object is ok
user.tags.push("admin");
user.tags.push("editor");
console.log("User after push:", user);

// reassigning variable is not ok
try {
    user = {};
} catch (err) {
    console.log("Error: cannot reassign const variable");
}