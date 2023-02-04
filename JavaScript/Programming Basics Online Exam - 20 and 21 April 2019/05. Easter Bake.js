function Class(input) {
    //pack of sugar = 950 ; flour = 750

    let amountOfBread = Number(input[0]);
    let index = 1
    let neededPacksOfSugar = 0;
    let neededPacksOfFlour = 0;

    let maxSugar =0
    let maxFlour = 0
    
    
    for (let i = 1; i <= amountOfBread; i++) {

        let spendSugar = Number(input[index++]);
        
        let spendFlour = Number(input[index++]);

        neededPacksOfSugar += spendSugar;
        neededPacksOfFlour += spendFlour;

        if (maxSugar < spendSugar) {
            maxSugar = spendSugar
        }

        if (maxFlour < spendFlour) {
            maxFlour = spendFlour
        }

        
    }
    let sugarNeeded = Math.ceil(neededPacksOfSugar / 950);
    let flourNeeded = Math.ceil(neededPacksOfFlour / 750)
    console.log(`Sugar: ${sugarNeeded}`);
    console.log(`Flour: ${flourNeeded}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
