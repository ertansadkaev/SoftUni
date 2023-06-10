function Restaruant (input){

    let chichkenMenu = Number (input[0]* 10.35);
    let fishMenu = Number (input[1]* 12.40);
    let vegieMenu = Number (input[2]* 8.15);
    let desertDiscount = 0.20;
    let delivery = 2.50;
    let finalSumMenu = chichkenMenu + fishMenu + vegieMenu;
    let finalPriceDesert = finalSumMenu * desertDiscount;
    let totalSum = finalPriceDesert + finalSumMenu + delivery;
    console.log (totalSum);
}
Restaruant (["2","4","3"]);