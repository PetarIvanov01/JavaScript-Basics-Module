function Class(input) {

    let taskSteps = 10000;
    let sumSteps = 0;



    let stepsReached = false
    let command = input[0]
    let index = 1;

    while (command !== `Going home`) {
        let steps = Number(command);
        sumSteps += steps

        if (taskSteps <= sumSteps) {
            stepsReached = true
            //  console.log(`Goal reached! Good job!`);
            // console.log(`${sumSteps - taskSteps} steps over the goal!`)
            break;
        }
        command = input[index];
        index++;

        if (command === `Going home`) {
            let stepsToHome = Number(input[index]);
            sumSteps += stepsToHome;

            // break;
        }
    }
    if (taskSteps <= sumSteps || stepsReached == true) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - taskSteps} steps over the goal!`)
    }
    else {

        console.log(`${Math.abs(sumSteps - taskSteps)} more steps to reach goal.`);
    }



}
