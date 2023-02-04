function Class(input) {
    let index = 0;
    let negativeGradesLimit = Number(input[index]);
    index++
    let countOfBadGrades = 0;
    let sumGrades = 0;
    let gradesCounter = 0;
    let lastProblem;
    let avgGrade;

    while (countOfBadGrades < negativeGradesLimit) {
        let nameofExercise = input[index];
        index++
        let grade = Number(input[index]);
        index++
        if (nameofExercise == "Enough") {
            avgGrade = sumGrades / gradesCounter;
            console.log(`Average score: ${avgGrade.toFixed(2)}`);
            console.log(`Number of problems: ${gradesCounter}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        if (grade <= 4) {
            countOfBadGrades++;
        }
        sumGrades += grade;
        gradesCounter++;
        lastProblem = nameofExercise;
    }
    if (countOfBadGrades == negativeGradesLimit) {
        console.log(`You need a break, ${countOfBadGrades} poor grades.`)
    }
}
