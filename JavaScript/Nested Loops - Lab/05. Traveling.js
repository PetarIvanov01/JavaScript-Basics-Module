function Class(input) {
    let destination = ``;
    let index = 0;
    let budget = 0
    while (destination !== `End`) {
        let sum = 0
        destination = input[index];
        index++;
        budget = Number(input[index]);
        index++;
        while (budget >= sum) {
            let save = Number(input[index]);
            sum += save;
            index++;
            if (budget <= sum) {

                break;
            }
        }
        console.log(`Going to ${destination}!`)
        destination = input[index];
    }
}
