function Class (input){
    let month = String(input[0]);
    let nights = Number(input[1]);
    let apartmentPrice = 0;
    let studioPrice = 0;


    if (month === `May` || month === `October`){
        apartmentPrice = 65 * nights;
        studioPrice = 50 * nights;
        if(nights > 7 && nights < 14){
            studioPrice *=0.95; 
        } 
        if (nights > 14){
            studioPrice *=0.70;
            apartmentPrice *=0.90;
        } 
    }

    else if (month === `June` || month === `September`){
        apartmentPrice = 68.70 * nights;
        studioPrice = 75.20 * nights;
        if(nights > 14){
            studioPrice *= 0.80;
            apartmentPrice *= 0.90;
        }
    }
    
    else if (month === "July" || month === "August") {
        apartmentPrice = 77 * nights;
        studioPrice = 76 * nights;
        if (nights > 14){
            apartmentPrice *= 0.90;
        }
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
