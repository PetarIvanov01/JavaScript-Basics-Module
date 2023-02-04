function Class(input) {
    let income = 0;
    let incomeClub = 0
    let index = 0
    let profit = Number(input[index]);
    index++;
    let command = input[index]

    while (command !== `Party!`) {
        command = input[index]
        let coctailPrice = command.length
        index++;
        let amountCoctail = Number(input[index]);
        income = amountCoctail * coctailPrice

        if (income % 2 !== 0) {
            income *= 0.75;
        }
        incomeClub += income;

        if (incomeClub >= profit) {
            console.log(`Target acquired.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === `Party!`) {
        let diff = profit - incomeClub;
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${incomeClub.toFixed(2)} leva.`);
}
