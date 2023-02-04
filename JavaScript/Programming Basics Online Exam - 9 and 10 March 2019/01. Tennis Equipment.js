function Class(input) {
 /*   •	Цена на една тенис ракета – реално число в интервала [0.00…100000.00]
•	Брой тенис ракети - цяло число в интервала [0…100]
•	Брой чифтове маратонки - цяло число в интервала [0…100]*/

let tenisRacket = Number(input[0]);
let amountOfTR = Number(input[1]);
let amountOfPairShoes = Number(input[2]);

let priceOfTr = tenisRacket * amountOfTR;

let priceForPr = tenisRacket / 6;
let priceForAllPr = priceForPr * amountOfPairShoes;

let priceForOtherEq = (priceOfTr + priceForAllPr) * 0.2
let sumAllEq =priceForAllPr + priceForOtherEq + priceOfTr

let djokovichPrice = sumAllEq / 8;
let sponsorsPrice = sumAllEq * 7 / 8 

console.log(`Price to be paid by Djokovic ${Math.floor(djokovichPrice)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`);
 
}
