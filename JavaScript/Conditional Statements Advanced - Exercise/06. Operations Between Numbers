function Class (input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let operator = String(input[2]);
    let sum = 0;

   switch (operator){
    case `+`: sum = x + y;
    if(sum % 2 == 0){
            console.log(`${x} ${operator} ${y} = ${sum} - even`)
    } else {
        console.log(`${x} ${operator} ${y} = ${sum} - odd`)
    }
        break;
    case `-`: sum = x - y ; 
    if (sum % 2 == 0){
        console.log(`${x} ${operator} ${y} = ${sum} - even`)
    } else{
        console.log(`${x} ${operator} ${y} = ${sum} - odd`)
    }
        break
    case `*`: sum = x * y;
    if (sum % 2 == 0){
        console.log(`${x} ${operator} ${y} = ${sum} - even`)
    } else {
        console.log(`${x} ${operator} ${y} = ${sum} - odd`)
    }
        break;
   }

   if (operator == `/`){
    if (y == 0){
        console.log(`Cannot divide ${x} by zero`)
    } else {
        sum = x / y;
        console.log(`${x} ${operator} ${y} = ${sum.toFixed(2)}`)
    }
   }
   if(operator == `%`){
    if(y == 0){
        console.log(`Cannot divide ${x} by zero`)
    } else {
        sum = x % y;
    console.log(`${x} ${operator} ${y} = ${sum}`)
    }
   }
}
