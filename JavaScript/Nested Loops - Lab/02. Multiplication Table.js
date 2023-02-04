function Class(input) {

    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        for (let y = 1; y <= 10; y++) {
            sum = i * y
            console.log(`${i} * ${y} = ${sum}`);
        }
    }

}
