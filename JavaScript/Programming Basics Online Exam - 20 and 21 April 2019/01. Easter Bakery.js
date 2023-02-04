function Class(input) {
    let flourPrice = Number(input[0]);
    let flourKg = Number(input[1])
    let sugarKg = Number(input[2])
    let eggPack = Number(input[3])
    let yeastPacket = Number(input[4])

    let sum = 0;

    let sumFlour = flourPrice * flourKg;
    let priceSugar = flourPrice * 0.75;
    let priceEggs = flourPrice * 1.1;
    let priceYeast = priceSugar * 0.2;
    
    sum = sumFlour +(priceSugar * sugarKg) + (priceEggs * eggPack) + (priceYeast * yeastPacket)
    console.log(sum.toFixed(2));
}
