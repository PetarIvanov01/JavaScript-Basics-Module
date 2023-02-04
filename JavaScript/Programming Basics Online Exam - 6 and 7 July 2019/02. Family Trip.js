function Class (input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentAdditionalCosts = Number(input[3]);

    let additionalCosts = budget * (percentAdditionalCosts / 100);
    

   if (nights > 7) {
    nights *= 0.95;
   }
   let sum = nights * pricePerNight + additionalCosts;

   if (budget >= sum) {
    let leftMoney = budget - sum;
    console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);
   }else {
    let diff = sum - budget;
    console.log(`${diff.toFixed(2)} leva needed.`);
   }

   
}
