function Class (input){
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++) {
        let numbers = Number(input[i]);
        if (numbers < 200) {
            p1++;
        }else if (numbers < 400) {
            p2++;
        }else if (numbers < 600) {
            p3++
        }else if (numbers < 800) {
            p4++;
        }else {
            p5++;
        }
    }
    let p1Percantage = 0;
    let p2Percantage = 0;
    let p3Percantage = 0;
    let p4Percantage = 0;
    let p5Percantage = 0;

     p1Percantage = (p1 / n * 100);
     p2Percantage = (p2 / n * 100);
     p3Percantage = (p3 / n * 100);
     p4Percantage = (p4 / n * 100);
     p5Percantage = (p5 / n * 100);

     console.log(p1Percantage.toFixed(2) + `%`);
     console.log(p2Percantage.toFixed(2) + `%`);
     console.log(p3Percantage.toFixed(2) + `%`);
     console.log(p4Percantage.toFixed(2) + `%`);
     console.log(p5Percantage.toFixed(2) + `%`);
     
    
}
