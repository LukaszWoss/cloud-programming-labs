// S1_VAR_01

var myText = "Hello World"; // string
let myNumber = 123;         // number
const myBool = true;        // boolean

console.table([
    { variable: "myText",   value: myText,   type: typeof myText },
    { variable: "myNumber", value: myNumber, type: typeof myNumber },
    { variable: "myBool",   value: myBool,   type: typeof myBool }
]);
