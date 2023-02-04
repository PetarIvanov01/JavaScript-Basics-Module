function Class(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
        let data = input[index];
        index++;

    }
    console.log(`Welcome ${username}!`);

}
