function Class(input) {
    let drink = input[0];
    let choice = input[1];
    let cups = Number(input[2]);
    let sum = 0;


    switch (drink) {
        case `Espresso`:
            if (choice === `Without`) {
                sum = 0.90 * cups;
                sum *= 0.65;
            } else if (choice === `Normal`) {
                sum = 1.00 * cups;
            } else if (choice === `Extra`) {
                sum = 1.20 * cups;
            }
            if (sum >= 5) {
                sum = sum * 0.75;
            }
            break;
        case `Cappuccino`:
            if (choice === `Without`) {
                sum = 1.00 * cups;
                sum *= 0.65;
            } else if (choice === `Normal`) {
                sum = 1.20 * cups;
            } else if (choice === `Extra`) {
                sum = 1.60 * cups;
            }
            break;
        case `Tea`:
            if (choice === `Without`) {
                sum = 0.50 * cups;
                sum *= 0.65;
            } else if (choice === `Normal`) {
                sum = 0.60 * cups;
            } else if (choice === `Extra`) {
                sum = 0.70 * cups;
            }
            break;
    }

    if (sum > 15.0) {
        sum *= 0.8;
    }
    console.log(`You bought ${cups} cups of ${drink} for ${sum.toFixed(2)} lv.`);


}
