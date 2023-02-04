function Class(input) {
    /* For even - floor ; odd - apartments; Apartment - A${floor}${apartmentN} ;Ofice - O${floor}&{OficeN};Last floor - L  
    */


    let floor = Number(input[0]);
    let room = Number(input[1]);
   
    for (let i = floor; i > 0; i--) {
        let buff = ""
        for (let z = 0; z < room; z++) {
            if (floor === i) {
                buff += `L${i}${z} `;
            }
            else if (i % 2 == 0) {
                buff += `O${i}${z} `;
            }
            else {
                buff += `A${i}${z} `;
            }
        }
        console.log(buff);
    }
}
