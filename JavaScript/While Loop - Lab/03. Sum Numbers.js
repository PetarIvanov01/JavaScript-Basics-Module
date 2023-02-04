function Class(input) {
    let n = Number(input[0]);
    let index = 1;
    let sum = 0;
    while (n > sum) {
        let number = Number(input[index]);
        sum+=number;
        index++;
    }
    console.log(sum);

}
