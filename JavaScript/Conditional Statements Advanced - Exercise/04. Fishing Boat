function Class (input){
    let budget = Number(input[0]);
    let seson = String(input[1]);
    let fishers = Number(input[2]);
    let price = 0;
    if(seson == `Spring` ){
        price = 3000;
    }
    else if (seson == `Summer`){
        price = 4200;
    }else if (seson ==`Autumn`){
        price = 4200;
    }
    
     else if(seson == `Winter`){
        price = 2600;
     } 

    
    if (fishers<=6){
        price *=0.90; 
    }
    else if (fishers>7 && fishers<=11){
        price *=0.85;
    }
    else {
        price *=0.75;
    }
    if(fishers % 2 == 0 && seson !== `Autumn`){
        price *=0.95;
    } 
    
    if(budget >= price){
        let moneyLeft = budget - price;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }
    else {
        let diff = price - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
