function Class(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let cakeSize = l * w;


    let index = 2;

    let command = input[index];
    while (command !== `STOP`) {

        let peaceCake = Number(command);
        cakeSize -= peaceCake;

        if (0 > cakeSize) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        index++
        command = input[index];


    }
    if (command === `STOP`) {
        console.log(`${cakeSize} pieces are left.`);
    }

}
