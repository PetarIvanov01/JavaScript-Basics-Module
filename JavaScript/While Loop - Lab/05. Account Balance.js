function Class(input) {
    let index = 0;
    let balance = 0;

    let command = input[index];
    index++

    while (command !== "NoMoreMoney") {
        let deposite = Number(command);
        
        if (deposite < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        balance += deposite;
        console.log(`Increase: ${deposite.toFixed(2)}`)
        
        command = input[index];
        index++;
    }
console.log(`Total: ${balance.toFixed(2)}`);
}
