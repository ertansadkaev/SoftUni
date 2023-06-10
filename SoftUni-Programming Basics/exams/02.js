function bagage(input){
    let priceForBag = Number(input[0]);
    let kgForBag = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let countOfBag = Number(input[3]);
    if (kgForBag < 10){
        priceForBag = priceForBag * 0.20;
    } else if (kgForBag <= 20){
        priceForBag = priceForBag * 0.50;
    } else {
        priceForBag = priceForBag;
    }
    if (daysToTravel > 30){
        priceForBag = priceForBag * 1.10;
    } else if (daysToTravel > 7){
        priceForBag = priceForBag * 1.15;
    } else {
        priceForBag = priceForBag * 1.40;
    }
    let total = (priceForBag * countOfBag).toFixed(2);
    console.log(`The total price of bags is: ${total} lv.`);
}
bagage(["30","18","15","2"]);