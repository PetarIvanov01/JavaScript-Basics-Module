function Class(input) {
    let eggsForFirstPlayer = Number(input[0])
    let eggsForSecondPlayer = Number(input[1]);

    let index = 2
    let command = input[index];

    while (command !== `End`) {
        command = input[index];

        if (command == `one`) {
            eggsForSecondPlayer--;
        }
        else if (command == `two`) {
            eggsForFirstPlayer--;
        }

        if (eggsForFirstPlayer <= 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsForSecondPlayer} eggs left.`);
            break;
        }
        else if (eggsForSecondPlayer <= 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsForFirstPlayer} eggs left.`);
            break;
        }

        index++;
        command = input[index]
    }

    if (command == `End`) {
        console.log(`Player one has ${eggsForFirstPlayer} eggs left.`)
        console.log(`Player two has ${eggsForSecondPlayer} eggs left.`);
    }
}
