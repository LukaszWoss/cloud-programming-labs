// S2_ARR_06

function transformUsers(users) {
    // 1. filter active
    let active = users.filter(u => u.active);
    
    // 2. get names
    let names = active.map(u => u.name.toUpperCase());
    
    // 3. sort A-Z
    names.sort();
    
    return names;
}

const data = [
    { id: 1, name: "Bob", active: true },
    { id: 2, name: "Alice", active: true },
    { id: 3, name: "John", active: false }
];

console.log(transformUsers(data));