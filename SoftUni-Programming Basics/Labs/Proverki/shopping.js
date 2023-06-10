function shopping(input){
    let budged = Number(input[0]);
    let videoCards = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);
    let priceVideoCard = videoCards * 250;
    let priceProcessor = processor * priceVideoCard * 0.35;
    let priceRam = ram * priceVideoCard * 0.10;
    let totalPrice = (priceVideoCard + priceProcessor + priceRam);
    
    if (videoCards > processor){
        totalPrice = totalPrice * 0.85;
    }
    let diff = Math.abs (totalPrice - budged);
    if (totalPrice <= budged){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }   else {      
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
shopping(["900",

"2",

"1",

"3"])