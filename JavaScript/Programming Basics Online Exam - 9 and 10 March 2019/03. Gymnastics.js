function Class(input) {
    let country = input[0];
    let type = input[1];

    let hard = 0
    let performance = 0;

    if (type === `ribbon`) {

        switch (country) {
            case `Russia`: hard = 9.1
                performance = 9.4
                break;
            case `Bulgaria`: hard = 9.6
                performance = 9.4
                break
            case `Italy`: hard = 9.2
                performance = 9.5
                break;
        }
    }
   else if (type === `hoop`) {

        switch (country) {
            case `Russia`: hard = 9.3
                performance = 9.8
                break;
            case `Bulgaria`: hard = 9.55
                performance = 9.75
                break
            case `Italy`: hard = 9.45
                performance = 9.35
                break;
        }
    }
    else if (type === `rope`) {

        switch (country) {
            case `Russia`: hard = 9.6
                performance = 9
                break;
            case `Bulgaria`: hard = 9.5
                performance = 9.4
                break
            case `Italy`: hard = 9.7
                performance = 9.15
                break;
        }
    }

    let SumPoints = hard + performance;
    let percent = ((20 - SumPoints) /20) * 100

    console.log(`The team of ${country} get ${SumPoints.toFixed(3)} on ${type}.`);
    console.log(`${percent.toFixed(2)}%`);


}
