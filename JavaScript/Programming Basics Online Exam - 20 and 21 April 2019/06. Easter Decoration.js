function Class(input) {

    //basket - 1.50,wreath- 3.80 ,chocolate bunny - 7;

    let customers = Number(input[0])
    let index = 1;
    let sumPrice = 0;
    let buyCounter = 0;
    let averagePrice = 0;
    let average = 0;

   

    for (let i = 0; i < customers; i++) {

        let command = input[index];
        while (command !== `Finish`) {
            command = input[index];
            index++;

            switch (command) {
                case `basket`: sumPrice += 1.50;
                    buyCounter++;
                    break;
                case `wreath`: sumPrice += 3.80;
                    buyCounter++;
                    break;
                case `chocolate bunny`: sumPrice += 7;
                    buyCounter++;
                    break;
            }
            
            command = input[index];
        }
        
        if (buyCounter % 2 === 0) {
                sumPrice *= 0.80
            }
            averagePrice += sumPrice;
        console.log(`You purchased ${buyCounter} items for ${sumPrice.toFixed(2)} leva.`);
        sumPrice = 0;
        buyCounter = 0;
        index++;
    }
    averagePrice /= customers
    console.log(`Average bill per client is: ${averagePrice.toFixed(2)} leva.`);

}
