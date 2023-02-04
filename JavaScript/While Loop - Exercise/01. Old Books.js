
function Class(input) {
    let index = 0;
    let favouritebook = input[index];
    index++;

    let bookIsFound = false;
    let counter = 0;
    let command = input[index];
    index++;

    while (command !== `No More Books`) {

        if (command === favouritebook) {
            bookIsFound = true
            break;
        }

        counter++;
        command = input[index];
        index++;

    }

    if (bookIsFound != true) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
        
    } 
    else {
        console.log(`You checked ${counter} books and found it.`)
    }
}
