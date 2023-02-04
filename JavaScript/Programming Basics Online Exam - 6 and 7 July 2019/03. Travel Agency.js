function Class(input) {
    let town = input[0]
    let pack = input[1]
    let hasVIP = input[2] === `yes`;
    let days = Number(input[3]);
    let isValid = false;

    let price = 0;

    if (days > 7) {
        days--;
    }

    switch (town) {
        case `Bansko`:
        case `Borovets`:
            if (hasVIP) {
                if (pack === `noEquipment`) {
                    price = 80 * 0.95;
                } else if (pack === `withEquipment`) {
                    price = 100 * 0.9;
                } else {
                    isValid = true;
                }
            } else {
                if (pack === `noEquipment`) {
                    price = 80;
                } else if (pack === `withEquipment`) {
                    price = 100;
                } else {
                    isValid = true;
                }
            }
            break;
        case "Varna":
        case "Burgas":
            if (hasVIP) {
                if (pack === `withBreakfast`) {
                    price = 130 * 0.88;
                } else if (pack === `noBreakfast`) {
                    price = 100 * 0.92;
                } else {
                    isValid = true;
                }
            } else {
                if (pack === `withBreakfast`) {
                    price = 130;
                } else if (pack === `noBreakfast`) {
                    price = 100;
                } else {
                    isValid = true;
                }
            }
            break;
        default:
            isValid = true;
            break;
    }
    if (isValid) {
        console.log(`Invalid input!`);
    } else if (days < 1) {
        console.log(`Days must be positive number!`)
    } else {
        finalPrice = days * price;
        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
    }
}
