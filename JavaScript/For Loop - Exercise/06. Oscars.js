function Class(input) {
    let actorName = String(input[0]);
    let academiaPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let totalPoints = 0;
    totalPoints = academiaPoints;
    let didHeWonPrematurely = false;

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = String(input[i]);
        let judgePoints = Number(input[i + 1]);
        totalPoints += judgeName.length * judgePoints / 2;
        if (totalPoints > 1250.5) {
            didHeWonPrematurely = true;
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
            break;
        }

    }
    if (!didHeWonPrematurely) {
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
        } else {
            console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
        }
    }
}
