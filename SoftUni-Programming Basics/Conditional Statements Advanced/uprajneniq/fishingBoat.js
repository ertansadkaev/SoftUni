function fishing (input){
    let budged = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let price = 0;
    switch(season){
        case 'Spring': price = 3000;break;
        case 'Summer': price = 4200;break;
        case 'Autumn': price = 4200;break;
        case 'Winter': price = 2600;break;
    }
    if (fishers<=6){
        price = price * 0.90;
    } else if (fishers <= 11){
        price = price * 0.85;
    } else if (fishers >= 12){
        price = price * 0.75;
    } if (fishers % 2 === 0 && season != 'Autumn'){
        price = price * 0.95;
    }
    if (budged>=price){
        let total = budged - price;
        console.log(`Yes! You have ${total.toFixed(2)} leva left.`)
    } else {
        let total = price - budged;
        console.log(`Not enough money! You need ${total.toFixed(2)} leva.`)
    }


}
fishing(["3600",

"Autumn",

"12"]);