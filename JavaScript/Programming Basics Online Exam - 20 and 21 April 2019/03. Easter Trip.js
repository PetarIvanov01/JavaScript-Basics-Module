function Class(input) {
    let location = input[0];
    let data = input[1];
    let nights = Number(input[2]);

    let priceForNights =0

    if (location === `France`) {
        switch (data) {
            case `21-23`: priceForNights = nights *30; 
                break;
            case `24-27`:priceForNights = nights *35;
                break;
            case `28-31`:priceForNights = nights * 40;
                break;
        }
    }else if (location === `Italy`) {
        switch (data) {
            case `21-23`: priceForNights = nights *28; 
                break;
            case `24-27`:priceForNights = nights *32;
                break;
            case `28-31`:priceForNights = nights * 39;
                break;
        }
    }else if (location === `Germany`) {
        switch (data) {
            case `21-23`: priceForNights = nights *32; 
                break;
            case `24-27`:priceForNights = nights *37;
                break;
            case `28-31`:priceForNights = nights * 43;
                break;
        }
    }
    console.log(`Easter trip to ${location} : ${priceForNights.toFixed(2)} leva.`);
}
