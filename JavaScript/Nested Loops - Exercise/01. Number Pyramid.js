function Class(input) {
    let n = Number(input[0]);
    let current = 1;
    let isTrue = false;
    let currentPrintLine = " ";
    for (let i = 1; i <= n; i++) {
        for (let x = 1; x <= i; x++) {
            if (current > n) {
                isTrue = true
                break;
            }
            currentPrintLine += current + " ";
            current++
        }
        console.log(currentPrintLine);
        currentPrintLine = " ";
        if (isTrue) {
            break;
        }

    }

}
