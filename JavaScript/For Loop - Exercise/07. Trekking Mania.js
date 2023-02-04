function Class(input) {
    let amountOfGroups = Number(input[0]);
    let allPeople = 0;
    let musala = 0;
    let montBlanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 1; i <= amountOfGroups; i++) {

        let peopleInGroup = Number(input[i]);
        allPeople += peopleInGroup;

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        }
        else if (peopleInGroup <= 12) {
            montBlanc += peopleInGroup;
        }
        else if (peopleInGroup <= 25) {
            kilimandjaro += peopleInGroup;
        }
        else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        }
        else if (peopleInGroup >= 41) {
            everest += peopleInGroup;
        }



    }
    let musalaPercent = musala / allPeople * 100
    let montblancPercent = montBlanc / allPeople * 100
    let kilimandjaroPercent = kilimandjaro / allPeople * 100
    let k2Percent = k2 / allPeople * 100
    let everestPercent = everest / allPeople * 100
    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montblancPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

}
