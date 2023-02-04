function Class(input) {
    let paintedEggs = Number(input[0]);
    let Red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;


    for (let i = 1; i <= paintedEggs; i++) {
        let eggsPaint = input[i]

        if (eggsPaint === `red`) {
            Red++;
        } else if (eggsPaint === `orange`) {
            orange++;
        }
        else if (eggsPaint === `green`) {
            green++;
        }
        else if (eggsPaint === `blue`) {
            blue++;
        }
    }
    let maxEggsCounts = Red;
    let maxColours = `red`
    if (maxEggsCounts < orange) {
        maxEggsCounts = orange;
        maxColours = `orange`
   
    } if (maxEggsCounts < green) {
        maxEggsCounts = green;
        maxColours = `green`
   
    } if (maxEggsCounts < blue) {
        maxEggsCounts = blue;
        maxColours = `blue`
   
    }
    console.log(`Red eggs: ${Red}\nOrange eggs: ${orange}\nBlue eggs: ${blue}\nGreen eggs: ${green}`);
    console.log(`Max eggs: ${maxEggsCounts} -> ${maxColours}`);
}
