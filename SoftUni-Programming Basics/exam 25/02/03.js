function computerRoom (input){
    let month = input[0];
    let spendHours = Number(input[1]);
    let peopleCount = Number(input[2]);
    let dayOrNight = input[3];
    let priceForHour = 0;
    switch(month){
        case "march":
            if (dayOrNight === "day"){
            priceForHour = 10.50;
            } else if (dayOrNight === "night"){
            priceForHour = 8.40;
            }
            break;
        case "april":
            if (dayOrNight === "day"){
                priceForHour = 10.50;
                } else if (dayOrNight === "night"){
                priceForHour = 8.40;
                }
            break;
        case "may":
            if (dayOrNight === "day"){
                priceForHour = 10.50;
                } else if (dayOrNight === "night"){
                priceForHour = 8.40;
                }
            break;
        case "june":
            if (dayOrNight === "day"){
                priceForHour = 12.60;
                } else if (dayOrNight === "night"){
                priceForHour = 10.20;
                }
            break;
        case "july":
            if (dayOrNight === "day"){
                priceForHour = 12.60;
                } else if (dayOrNight === "night"){
                priceForHour = 10.20;
                }
            break;
        case "august":
            if (dayOrNight === "day"){
                priceForHour = 12.60;
                } else if (dayOrNight === "night"){
                priceForHour = 10.20;
                }
            break;
    } 
    if (peopleCount >= 4){
        priceForHour = priceForHour * 0.90;
    } if (spendHours >= 5){
        priceForHour = priceForHour * 0.50;
    }
    let totalPrice = (priceForHour * peopleCount) * spendHours;
    console.log(`Price per person for one hour: ${priceForHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
     

}
computerRoom(["july",
"5",
"5",
"night"]);