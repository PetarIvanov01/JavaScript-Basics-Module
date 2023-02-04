function Class(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let volume = w * l * h;
    let cubic = 0;
    let index = 3;
    let command = input[index];

    while (command !== `Done`) {

        let box = Number(command);
        cubic += box;
        if (cubic > volume) {
            console.log(`No more free space! You need ${cubic - volume} Cubic meters more.`);
            break;
        }
        index++
        command = input[index]
    }
    if (command === `Done`) {
        console.log(`${volume - cubic} Cubic meters left.`);
    }
}
