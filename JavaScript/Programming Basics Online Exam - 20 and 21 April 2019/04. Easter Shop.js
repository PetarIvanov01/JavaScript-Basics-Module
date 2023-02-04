function Class(input) {
    let eggsInTheStore = Number(input[0])
    let eggsSold = 0;

    let currentSupplet = 0;
    let index = 1
    let command = input[index];

    while (command !== `Close`) {
        command = input[index];
        index++;
        let eggs = Number(input[index]);


        
        if (command == `Buy`) {
            currentSupplet = eggsInTheStore
            eggsInTheStore -= eggs;
            eggsSold += eggs;
        }
        else if (command == `Fill`) {
            eggsInTheStore += eggs;
        }


        if (eggsInTheStore <0) {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${currentSupplet}.`);
            break;
        }


        index++;
        command = input[index]
    }

    if (command == `Close`) {
        console.log(`Store is closed!`);
        console.log(`${eggsSold} eggs sold.`);
    }
}
