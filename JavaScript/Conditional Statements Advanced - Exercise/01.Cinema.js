function Class (input) {
    let Type = String(input[0]);
    let lines = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    if(Type == `Premiere`){
        income = (lines * columns) * 12.00;
    } else if(Type == `Normal`){
        income = (lines * columns) * 7.50;
    } else if(Type == `Discount`){
        income = (lines * columns) * 5.00;
    }
   
    console.log(`${income.toFixed(2)} leva`)
}
