function Class(input) {
    let openTabs = Number(input[0])
    let salary = Number(input[1]);
    for (let i = 0; i < salary; i++) {
        let sites = input[i];
        switch (sites) {
            case `Facebook`: salary -= 150;
                break;
            case `Instagram`: salary -= 100;
                break;
            case `Reddit`: salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
   if (salary > 0){
    console.log(salary);
   }
}
