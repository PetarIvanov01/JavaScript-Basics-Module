function Class (input){
    let temp = Number(input[0]);
    let TypeOfTheDay = String(input[1]);
    let outfit = ``;
    let shoes = ``;
    if (temp>=10 && temp<=18){
        switch(TypeOfTheDay){
            case `Morning`:
                outfit = `Sweatshirt`
                shoes = `Sneakers`
            break;
            case `Afternoon`:
                outfit = `Shirt`
                shoes = `Moccasins`
            break;
            case `Evening`:
                outfit = `Shirt` 
                shoes = `Moccasins`
            break;
        }
    }
    else if (temp>18 && temp<=24){
        switch(TypeOfTheDay){
            case `Morning`:
                outfit = `Shirt`
                shoes = `Moccasins`
            break;
            case `Afternoon`:
                outfit = `T-Shirt`
                shoes = `Sandals`
            break;
            case `Evening`:
                outfit = `Shirt` 
                shoes = `Moccasins`
            break;
        }
    }
    else if (temp >=25){
        switch(TypeOfTheDay){
            case `Morning`:
                outfit = `T-Shirt`
                shoes = `Sandals`
            break;
            case `Afternoon`:
                outfit = `Swim Suit`
                shoes = `Barefoot`
            break;
            case `Evening`:
                outfit = `Shirt` 
                shoes = `Moccasins`
            break;
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
}
