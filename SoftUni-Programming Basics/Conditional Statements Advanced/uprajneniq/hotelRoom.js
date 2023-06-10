function hotelRoom (input){
    let mounth = input[0];
    let days = Number(input[1]);
    let apartamentPrice = 0;
    let studioPrice = 0;
    switch(mounth){
        case 'May':
            apartamentPrice = days * 65;
            studioPrice = days * 50;
            break;
        case 'June':
            apartamentPrice = days * 68.70;
            studioPrice = days * 75.20;
            break;
        case 'July':
            apartamentPrice = days * 77;
            studioPrice = days * 76;
            break;
        case 'August':
            apartamentPrice = days * 77;
            studioPrice = days * 76;
            break;
        case 'September':
            apartamentPrice =days * 68.70;
            studioPrice =days * 75.20;
            break;
        case 'October':
            apartamentPrice =days * 65;
            studioPrice =days * 50;
            break;
    }
    if (days > 7 && days < 14 && mounth === "May" || days > 7 && days < 14 && mounth === "October"){
        studioPrice = studioPrice * 0.95;
    }  else if (days > 14 && mounth === "May" || days > 14 && mounth === "October"){
        studioPrice = studioPrice * 0.70;
    }  else if (days > 14 && mounth === "June" || days > 14 && mounth === "September"){
        studioPrice = studioPrice * 0.80;
    }  if (days > 14){
        apartamentPrice = apartamentPrice * 0.90;
    }
    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotelRoom(["May",

"15"]);