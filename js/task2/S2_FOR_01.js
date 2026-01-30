// S2_FOR_01

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        // if empty, just number
        if (output === "") {
            console.log(i);
        } else {
            console.log(output);
        }
    }
}

fizzBuzz(15);