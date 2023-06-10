function vacation(group, type, day){
    let price = 0;
    let discount = 0;

    if (type == "Students"){
        switch (day){
            case "Friday": price = 8.45; break;
            case "Saturday": price = 9.80; break;
            case "Sunday": price = 10.46; break;
        }
    }
    if (type == "Business"){
        switch (day){
            case "Friday": price = 10.90; break;
            case "Saturday": price = 15.60; break;
            case "Sunday": price = 16; break;
        }
    }
    if (type == "Regular"){
        switch (day){
            case "Friday": price = 15; break;
            case "Saturday": price = 20; break;
            case "Sunday": price = 22.50; break;;
        }
    }
    if (group >= 30 && type == "Students"){
        price = price * 0.85;
    } else if (group >= 100 && type == "Business"){
        group = group - 10;
    } else if (group >= 10 && group <= 20 && type == "Regular"){
        price = price * 0.95;
    }
    let result = group * price;
    console.log(`Total price: ${result.toFixed(2)}`);



}
vacation(30,"Students","Sunday");