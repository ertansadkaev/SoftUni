function journey (input){
    let budged = Number (input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;
    if (budged <= 100 && season == 'summer'){
        budged = budged * 0.30;
        destination = "Bulgaria";
        place = "Camp";
    } else if (budged <= 100 && season == 'winter'){
        budged = budged * 0.70;
        destination = "Bulgaria";
        place = "Hotel";
    } else if (budged <= 1000 && season == 'summer'){
        budged = budged * 0.40;
        destination = "Balkans";
        place = "Camp";
    } else if (budged <= 1000 && season == 'winter'){
        budged = budged * 0.80;
        destination = "Balkans";
        place = "Hotel";
    } else if (budged > 1000){
        budged = budged * 0.90;
        destination = "Europe";
        place = "Hotel";
    }
 console.log(`Somewhere in ${destination}`);
 console.log(`${place} - ${budged.toFixed(2)}`)
}

journey(["50", "summer"]);