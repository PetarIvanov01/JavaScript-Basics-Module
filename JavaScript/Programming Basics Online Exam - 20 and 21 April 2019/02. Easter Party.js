function Class(input) {
    let guests = Number(input[0]);
    let dinnerForGuest = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0


    if (guests >= 10 && guests <= 15) {
        dinnerForGuest *= 0.85;
    }
    else if (guests > 15 && guests <= 20) {
        dinnerForGuest *= 0.80;
    } else if (guests >20){
        dinnerForGuest *= 0.75;
    }
    let cake = budget * 0.10;

    sum = dinnerForGuest * guests + cake;

    if (budget >= sum) {
        let moneyLeft = budget - sum;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    }
    else{
        let diff = sum - budget
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }

}
