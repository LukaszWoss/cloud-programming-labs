// S2_FOR_05

// printing simple table
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        // adding padding for formatting
        row += (i * j) + "\t"; 
    }
    console.log(row);
}