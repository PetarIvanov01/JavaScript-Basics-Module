function Class(input) {
    

    let controlMim = Number(input[0]);
    let secControl = Number(input[1]);
    let uleiMeters = Number(input[2]);
    let secFor100Meters = Number(input[3]);

    let controlInSec = controlMim * 60 + secControl;

    let lostTime = uleiMeters / 120
    let SumLostTime = 2.5 * lostTime;
    let marinTime = (uleiMeters / 100) * secFor100Meters - SumLostTime;

    if (marinTime > controlInSec) {
        let diff = marinTime - controlInSec
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
    else {
        
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${(marinTime.toFixed(3))}.`);
    }
    

}
