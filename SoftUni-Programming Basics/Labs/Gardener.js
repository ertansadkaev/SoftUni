function Gardener(square){

    let clientSquare = square[0];
    let price = 7.61;
    let finalPrice = square[0] * 7.61;
    let Discount = 0.18 * finalPrice;
    let DiscountPrice = finalPrice - Discount;
    
    
    console.log ("The Discound is : " + Discount);
    console.log ("The Final price is : " + DiscountPrice);
    
}

Gardener([550]);