function Class(input) {
    /*Баскетболни кецове – цената им е 40% по-малка от таксата за една година
• Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
• Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
• Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната 
    */

let yearPaymant =Number(input[0]);



let baskShoes = yearPaymant * 0.6;
let baskEq = baskShoes * 0.8
let baskBall = baskEq / 4
let baskAcs = baskBall / 5

let sumEq = baskShoes + baskEq + baskAcs + baskBall + yearPaymant;

console.log(sumEq.toFixed(2));


}
