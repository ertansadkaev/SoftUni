function toyShop(input){
    
    let holiday = Number(input[0]);
    let pazzle = Number(input[1]);
    let talkingBaby = Number(input[2]);
    let cryingBaby = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    
    let discount = 0;
    let pricePazzle = pazzle*2.60;
    let priceTalkingBaby = talkingBaby*3;
    let priceCryingBaby = cryingBaby*4.10;
    let priceMinions = minion*8.20;
    let priceTruck = truck*2;
    let totalPrice = pricePazzle + priceTalkingBaby + priceCryingBaby + priceMinions + priceTruck;
    let totalToys = pazzle + talkingBaby + cryingBaby + minion + truck;
    
    if (totalToys >= 50){
        discount = totalPrice * 0.25;
    }
    let priceWithDiscount = totalPrice - discount;
    let shopLoan = priceWithDiscount * 0.10;
    let income = priceWithDiscount - shopLoan;
    let Enough = income - holiday;
    let notEnough = holiday-income;
    if (income >= holiday){
        console.log(`Yes! ${Enough.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${notEnough.toFixed(2)} lv needed.`);
    }
    

}
toyShop(["40.8","20","25","30","50","10"]);