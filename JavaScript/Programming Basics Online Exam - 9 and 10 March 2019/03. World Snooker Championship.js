function Class(input) {
    let momentOfCompet = input[0];
    let typeTicket = input[1];
    let amountTicket = Number(input[2]);
    let photo = input[3]

    let photoPrice = 40;
    let ticketPrice = 0;
    let money = 0;


    if (typeTicket === `Standard`) {

        switch (momentOfCompet) {
            case `Quarter final`: money = 55.50

                break;
            case `Semi final`: money = 75.88

                break
            case `Final`: money = 110.10

                break;
        }
    }
    else if (typeTicket === `Premium`) {

        switch (momentOfCompet) {
            case `Quarter final`: money = 105.20 
                break;
            case `Semi final`: money = 125.22
                break
            case `Final`: money = 160.66
                break;
        }
    }
    else if (typeTicket === `VIP`) {

        switch (momentOfCompet) {
            case `Quarter final`: money = 118.90
                break;
            case `Semi final`: money = 300.40
                break
            case `Final`: money = 400
                break;
        }
    }
    ticketPrice = amountTicket * money;
    if (ticketPrice > 2500 && ticketPrice <= 4000) {
        ticketPrice *= 0.9
    }
    else if (ticketPrice > 4000) {
        ticketPrice *= 0.75
        photoPrice = 0

    }

    if (photo === `Y`) {
        ticketPrice += photoPrice * amountTicket
    }



    console.log(ticketPrice.toFixed(2));



}
