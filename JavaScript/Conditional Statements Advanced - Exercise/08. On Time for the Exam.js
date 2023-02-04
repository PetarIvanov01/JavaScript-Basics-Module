function Class (input){
    examHour = Number(input[0]);
    examMin = Number(input[1]);
    arriveHour = Number(input[2]);
    arriveMin = Number(input[3]);
 
    let examTime =(examHour * 60) + examMin;
    let arrivalTime =(arriveHour * 60) + arriveMin;
 
    let timeDifference = examTime - arrivalTime;
 
    let earlyHour;
    let earlyMin;
    let lateHour;
    let lateMin;
 
 
    if (timeDifference >= 0 && timeDifference <= 30) {  // on time
 
        if (timeDifference == 0){
            console.log("On time");
 
        } else {
            console.log("On time");
            console.log(`${timeDifference} minutes before the start`);  
        }
 
    }
 
    else if (timeDifference > 30 ) {          // Early
 
        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;
 
 
        if (timeDifference > 30 && timeDifference <= 59) {
            console.log("Early");
            console.log(`${timeDifference} minutes before the start`);
        }
        else if (arriveMin < 10){
 
            console.log("Early");
            console.log(`${earlyHour}:0${earlyMin} hours before the start`);
        }
        else {
 
            console.log("Early");
            console.log(`${earlyHour}:${earlyMin} hours before the start`);
        }
 
    }
 
    else {      //  Late
 
        timeDifference = Math.abs(timeDifference);
        lateHour = Math.floor(timeDifference / 60);
        lateMin = timeDifference % 60;
 
        if (timeDifference <= 59) {
            console.log("Late");
            console.log(`${timeDifference} minutes after the start`);
 
        }
        else if (arriveMin < 10){
 
            console.log("Late");
            console.log(`${lateHour}:0${lateMin} hours after the start`);              
        }
        else {
            console.log("Late");
            console.log(`${lateHour}:${lateMin} hours after the start`); 
 
        }
    }
}
