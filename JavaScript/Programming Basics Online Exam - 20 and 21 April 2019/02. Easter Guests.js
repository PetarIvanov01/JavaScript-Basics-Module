function Class(input) {
        let guest = Number(input[0]);
        let budget = Number(input[1]);

        let breadForGuests = Math.ceil(guest / 3)
        let eggsForGuests = guest * 2;

        let breadPrice = breadForGuests * 4;
        let eggsPrice = eggsForGuests * 0.45;

        let sum = breadPrice + eggsPrice;

        if (budget >= sum) {
            let moneyLeft = budget - sum;
            console.log(`Lyubo bought ${breadForGuests} Easter bread and ${eggsForGuests} eggs.`);
            console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
        }
        else {
            let diff = sum - budget;
            console.log(`Lyubo doesn't have enough money.`);
            console.log(`He needs ${diff.toFixed(2)} lv. more.`);
        }

}
