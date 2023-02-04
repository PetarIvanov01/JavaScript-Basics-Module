function Class(input) {

    let gameSales = Number(input[0]);
    let HearthstoneCounter = 0;
    let ForniteCounter = 0;
    let Overwatch = 0;
    let OthersCounter = 0;

    for (let i = 1; i <= gameSales; i++) {
        let games = input[i];

        switch (games) {
            case `Hearthstone`: HearthstoneCounter++;
                break;
            case `Fornite`: ForniteCounter++;
                break;
            case `Overwatch`: Overwatch++;
                break;
            default: OthersCounter++;
                break;
        }

    }
    console.log(`Hearthstone - ${((HearthstoneCounter / gameSales) * 100 ).toFixed(2)}% `);
    console.log(`Fornite - ${((ForniteCounter / gameSales ) * 100).toFixed(2) }%`);
    console.log(`Overwatch - ${((Overwatch / gameSales) * 100).toFixed(2) }%`);
    console.log(`Others - ${((OthersCounter / gameSales) * 100).toFixed(2) }%`);
}
