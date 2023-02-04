function Class (input){
    let flowers = String(input[0]);
    let amountFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let discount = 0;
    let sum = 0;

    switch(flowers){
        case `Roses`: sum = amountFlowers * 5;
        break;
        case `Dahlias`: sum = amountFlowers * 3.80;
        break;
        case `Tulips`: sum = amountFlowers * 2.80;
        break;
        case `Narcissus`: sum = amountFlowers * 3;
        break;
        case `Gladiolus` : sum = amountFlowers * 2.50;
        break;
        
    }

    //- "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"//
    if (flowers == `Roses`){
        if (amountFlowers > 80){
            discount = sum - (sum * 0.1);
        }
        else {
            discount = sum
        }
    }
    else if (flowers == `Dahlias`){
        if (amountFlowers > 90){
            discount = sum - (sum * 0.15);
        }
        else{
            discount = sum
        }
    }
    else if(flowers == `Tulips`){
        if (amountFlowers > 80){
            discount = sum - (sum * 0.15);
        }
        else{
            discount = sum
        }
    }
    else if (flowers == `Narcissus`){
        if (amountFlowers < 120){
            discount = sum + (sum * 0.15);
        }
        else{
            discount = sum
        }
    }
    else if (flowers == `Gladiolus`){
        if (amountFlowers < 80){
            discount = sum + (sum * 0.20);
        }
        else{
            discount = sum
        }
    }

    if (budget > discount){
        let moneyleft = budget - discount;
        console.log(`Hey, you have a great garden with ${amountFlowers} ${flowers} and ${moneyleft.toFixed(2)} leva left.`)
    }
    else {
        let diff = discount - budget;
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
