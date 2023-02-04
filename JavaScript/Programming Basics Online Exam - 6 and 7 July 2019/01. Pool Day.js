function Class (input) {
    let people = Number(input[0]);
    let entryFee = Number(input[1]);
    let priceForLounger = Number(input[2]);
    let priceForUmbrella = Number(input[3]);

    let sumPrice = 0; 
    let sumFee = people * entryFee;

    let amountOfLounger = Math.ceil(people * 0.75);
    let amountOfUmbrella = Math.ceil(people * 0.50);

    sumPrice = (amountOfLounger * priceForLounger) + (priceForUmbrella * amountOfUmbrella) + sumFee;

    console.log(`${sumPrice.toFixed(2)} lv.`)




}
