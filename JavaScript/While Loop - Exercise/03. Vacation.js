function Class(input) {
    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let counterSpend = 0;

    let daysCounter = 0
    let command = input[index];

    while (moneyNeeded > availableMoney) {
        index++;
        daysCounter++;

        if (command === `spend`) {
            counterSpend++;
            let moneySpend = Number(input[index]);
            availableMoney -= moneySpend;

            if (availableMoney < 0) {
                availableMoney = 0;
            }
        }

        else if (command === `save`) {
            counterSpend = 0;
            let moneySave = Number(input[index]);
            availableMoney += moneySave;

        }

        if (counterSpend >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCounter}`);
            break;
        }
        index++
        command = input[index]
    }
    if (availableMoney >= moneyNeeded) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }



}
