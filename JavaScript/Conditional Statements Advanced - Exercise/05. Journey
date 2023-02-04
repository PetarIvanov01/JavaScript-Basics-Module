function Class (input){
    let budget = Number(input[0]);
    let season = String(input[1]);
    let spend = 0;
    let distance = ``
    let type = ``
    if (budget <= 100){
        distance = `Bulgaria`
        if(season == `summer`){
            spend = budget * 0.30;
            type = `Camp`
        } 
        else {
            spend = budget * 0.70;
            type = `Hotel`
        }
    }
    else if (budget <= 1000){
        distance = `Balkans`
        if(season == `summer`){
            spend = budget * 0.40;
            type = `Camp`
        }
        else {
            spend = budget * 0.80;
            type = `Hotel`
        }
    }
    else {
        distance = `Europe`
        spend = budget * 0.90;
        type = `Hotel`
    }

    console.log(`Somewhere in ${distance}`)
    console.log(`${type} - ${spend.toFixed(2)}`)

}
