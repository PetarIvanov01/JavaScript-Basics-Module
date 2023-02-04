function Class(input) {
    let bread = Number(input[0]);
    let korieggs = Number(input[1]);
    let cokkiesKg = Number(input[2]);

    let lunchSum = 0;
    let paintForEggs = 0.15;

    let sumBread = bread * 3.20;
    let sumEggs = korieggs * 4.35;
    let sumCokkies = cokkiesKg * 5.40;

    let eggspaint = (korieggs * 12) * 0.15;

    lunchSum = sumBread + sumEggs + sumCokkies + eggspaint;

    console.log(lunchSum.toFixed(2));




}
