function Class(input) {

    let n = Number(input[0]);
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        for (let y = 0; y <= i; y++) {
            counter++;

        }
    }

    console.log(counter);
}
