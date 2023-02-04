function Class(input) {
    let index = 0;
    let name = input[index];
    index++;

    let negativeGrade = 0
    let i = 1;
    let sumGrade = 0;
    let haxExcluded = false ;
    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            negativeGrade++;
            if (negativeGrade == 2) {
                haxExcluded = true;
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;
    }

   let averageGrade = sumGrade /12;
   if(haxExcluded) {
    console.log(`${name} has been excluded at ${i} grade`);
   } else {
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
   }
    


}
