// S1_VAR_01

var myText = "Hello World"; // string
let myNumber = 123;         // number
const myBool = true;        // boolean

console.table([
    { variable: "myttext",   value: myText,   type: typeof myText },
    { variable: "mynumber", value: myNumber, type: typeof myNumber },
    { variable: "myBool",   value: myBool,   type: typeof myBool }
]);
