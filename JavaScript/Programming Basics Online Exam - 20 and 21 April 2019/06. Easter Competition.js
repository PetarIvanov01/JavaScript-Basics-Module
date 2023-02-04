function Class(input) {
    
    let name = " "
    let sumPoints = 0;
    let currentFirstChef = ""
    let maxPoints = Number.MIN_VALUE

    let bread = Number(input[0]);
    let index = 1;
    for (let i = 0; i < bread; i++) {
        name = input[index]
        index++
        let command = input[index]
        while (command !== `Stop`) {

           let grade = Number(command);
            sumPoints += grade
            index++
            command = input[index]

        }
        console.log(`${name} has ${sumPoints} points.`);
        
        if (maxPoints < sumPoints) {

            maxPoints = sumPoints;
            currentFirstChef = name
            
            console.log(`${currentFirstChef} is the new number 1!`);

        }
        index++
        
          
        name = " "
        sumPoints = 0
    }
    console.log(`${currentFirstChef} won competition with ${maxPoints} points!`);
    index++;

}
