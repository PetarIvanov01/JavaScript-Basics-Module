function Class(input) {
    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let wins = 0;
    let stagePoints = 0;
    for (let i = 2; i <= input.length ; i++) {
        let tournamentStage = input[i];

        switch (tournamentStage) {
            case `W`: stagePoints += 2000;
                wins++;
                break;
            case `F`: stagePoints += 1200;
                break;
            case `SF`: stagePoints += 720;
                break;
        }

    }
    points += stagePoints;
    let averagePoints = stagePoints / tournaments;
    let percentWins = ((wins) / tournaments) * 100;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWins.toFixed(2)}%`);
}
