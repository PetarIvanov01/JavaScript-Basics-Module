function Class(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isFound = false;
    let counter = 0;

    let sum = 0
    for (let i = start; i <= end; i++) {
        for (let y = start; y <= end; y++) {
            counter++;
            sum = i + y;
            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound == true) {
            break;
        }
    }
    if (isFound == false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
