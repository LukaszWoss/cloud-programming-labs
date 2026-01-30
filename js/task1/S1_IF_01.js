// S1_IF_01

function shippingCost(weightKg, isMember) {
    let cost;
    
    if (weightKg < 1) {
        cost = 10;
    } else if (weightKg <= 5) {
        cost = 20;
    } else {
        cost = 30;
    }

    if (isMember) {
        // 20% discount
        cost = cost * 0.8; 
    }

    return cost;
}

console.log(shippingCost(0.5, true)); // small + member
console.log(shippingCost(10, false)); // big + normal