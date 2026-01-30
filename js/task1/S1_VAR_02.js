// S1_VAR_02

console.log("check let:");
try {
    {
        let testLet = "secret";
    }
    console.log(testLet); // should fail
} catch (e) {
    console.log("error caught, let is not visible here");
}

console.log("check var:");
{
    var testVar = "public";
}
console.log(testVar); // should work

// let is block scoped, var is not