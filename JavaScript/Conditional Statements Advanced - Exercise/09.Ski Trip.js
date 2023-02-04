function Class  (input){
    let days = Number(input[0]);
    let typeRoom = String(input[1]);
    let grade = String(input[2]);

    let type = ``;
    let nights = days - 1;

    if (days < 10){
        if (typeRoom === `apartment`){
            nights = (nights * 25) * 0.70 ;
        }
        else if (typeRoom === `president apartment`){
            nights = (nights * 35) * 0.90
        }
        else {
             nights *= 18; 
        }
    }
    else if (days > 10 && days <15){
        if (typeRoom === `apartment`){
            nights = (nights * 25) * 0.65;
        }
        else if (typeRoom === `president apartment`){
            nights = (nights * 35) * 0.85;
        }
        else {
             nights *= 18; 
        }
    }
    else {
        if (typeRoom === `apartment`){
            nights = (nights * 25) * 0.50 ;
        }
        else if (typeRoom === `president apartment`){
            nights = (nights * 35) * 0.80
        }
        else {
             nights *= 18; 
        }
    }
    if (grade === `positive`){
        nights = (nights * 0.25) + nights;
    } 
    else{
        nights = nights * 0.90;
    }

    console.log(nights.toFixed(2))
}
