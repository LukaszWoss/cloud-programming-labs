// S3_FN_02

const people = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 35 }
];

// sort in place
people.sort((a, b) => a.age - b.age);

console.log(people);