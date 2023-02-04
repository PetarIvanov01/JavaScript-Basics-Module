function Class(input) {
    let teamName = input[0];
    let amountOfGames = Number(input[1]);
    let gamesPlayed = false
    if (amountOfGames == 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
        gamesPlayed = true;
    }

    let WCounter = 0;
    let WPoints = 0;
    let DCounter = 0;
    let DPoints = 0;
    let LCounter = 0;
    if (gamesPlayed == false) {
        
        for (let i = 2; i <= amountOfGames+1; i++) {
            let result = input[i];

            switch (result) {
                case `W`: WCounter++;
                    WPoints += 3;
                    break;
                case `D`: DCounter++;
                    DPoints += 1;
                    break;
                case `L`: LCounter++;
                    break
            }
            
        }
        console.log(`${teamName} has won ${WPoints + DPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${WCounter}`);
        console.log(`## D: ${DCounter}`);
        console.log(`## L: ${LCounter}`);
        console.log(`Win rate: ${((WCounter / amountOfGames) * 100).toFixed(2)}%`);
    }
}
