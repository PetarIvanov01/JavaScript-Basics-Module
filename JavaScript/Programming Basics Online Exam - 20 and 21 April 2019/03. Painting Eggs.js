function Class(input) {
    let eggsSize = input[0];
    let colourEggs = input[1];
    let packs = Number(input[2]);

    let priceForPack =0

    if (eggsSize === `Large`) {
        switch (colourEggs) {
            case `Red`: priceForPack = packs *16; 
                break;
            case `Green`:priceForPack = packs *12;
                break;
            case `Yellow`:priceForPack = packs * 9;
                break;
        }
    }else if (eggsSize === `Medium`) {
        switch (colourEggs) {
            case `Red`: priceForPack = packs *13; 
                break;
            case `Green`:priceForPack = packs *9;
                break;
            case `Yellow`:priceForPack = packs * 7;
                break;
        }
    }else if (eggsSize === `Small`) {
        switch (colourEggs) {
            case `Red`: priceForPack = packs *9; 
                break;
            case `Green`:priceForPack = packs *8;
                break;
            case `Yellow`:priceForPack = packs * 5;
                break;
        }
    }
    let discount = priceForPack * 0.65
    console.log(`${discount.toFixed(2)} leva.`);
}
