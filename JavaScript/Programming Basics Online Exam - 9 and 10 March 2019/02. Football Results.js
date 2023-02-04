function Class(input) {

    let firstGame = (input[0])
    let secondGame = (input[1])
    let thirdGame = (input[2]);

    let win = 0
    let loss = 0;
    let draw = 0;

    if (firstGame[0] > firstGame[2]) {

        win++;

    } else if (firstGame[0] < firstGame[2]) {

        loss++;

    } else if (firstGame[0] = firstGame[2]) {

        draw++;
    }

    if (secondGame[0] > secondGame[2]) {

        win++;

    } else if (secondGame[0] < secondGame[2]) {
        loss++;

    } else if (secondGame[0] = secondGame = [2]) {

        draw++;
    }

    if (thirdGame[0] > thirdGame[2]) {

        win++;
    } else if (thirdGame[0] < thirdGame[2]) {

        loss++;
    } else if (thirdGame[0] = thirdGame[2]) {

        draw++;
    }


    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${loss} games.`);
    console.log(`Drawn games: ${draw}`);

}
