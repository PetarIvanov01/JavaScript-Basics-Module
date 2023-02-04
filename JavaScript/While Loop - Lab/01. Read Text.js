function Class(input) {
    let index = 0;
    while (true) {
       let text = input[index];
        index++
        if (text === `Stop`) {
            break;
        }
        console.log(text)
    }
    
}
