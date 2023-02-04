function Class(input) {

    let number = Number(input[0]);

    let start = 1;
    let end = 9;
    let output = ``;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            for (let k = start; k <= end; k++) {
                for (let l = start; l <= end; l++) {
                    if (number % i === 0 &&
                        number % j === 0 &&
                        number % k === 0 &&
                        number % l === 0) {

                        output += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(output);
}
