function Class(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);

    let percentOfTotalArea = Number(input[2]);

    let sumWallsWithoutPercent = h * w * 4 - ((h * w * 4) * (percentOfTotalArea / 100));
    let paintedWallsL = 0;
    let enoughPaint = false;
    index = 3;
    let comand = input[index];


    while (comand !== `Tired!`) {
        let paintLitre = Number(comand);
        sumWallsWithoutPercent -= paintLitre;

        if (sumWallsWithoutPercent < 0) {
            console.log(`All walls are painted and you have ${Math.abs(sumWallsWithoutPercent)} l paint left!`);
            break;
        } 
        if (sumWallsWithoutPercent ===  0) {
        console.log(`All walls are painted! Great job, Pesho!`);
        break;
        }
\\
        index++;
        comand = input[index];
    }
    if (comand == `Tired!`) {
        console.log(`${sumWallsWithoutPercent} quadratic m left.`);
    }
    
}
