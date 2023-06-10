function newHome (input){

    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budged = Number (input[2]);
    let price =0;
    switch (flowerType){
        case 'Roses':
            price = quantity * 5;
            if (quantity > 80){
                price =  price * 0.90;
            }
        break;
        case 'Dahlias':
            price = quantity * 3.80;
            if (quantity > 90){
                price =  price * 0.85;
            }
        break;
        case 'Tulips':
            price = quantity * 2.80;
            if (quantity > 80){
                price =  price * 0.85;
            }
        break;
        case 'Narcissus':
            price = quantity * 3;
            if (quantity < 120){
                price =  price * 1.15;
            }
        break;
        case 'Gladiolus':
            price = quantity * 2.50;
            if (quantity < 80){
                price =  price * 1.20;
            }
        break;
    }
    if (budged<price){
        let leftMoney = price - budged;
        console.log(`Not enough money, you need ${leftMoney.toFixed(2)} leva more.`);
    } else if (budged>=price){
        let leftMoney = budged - price;
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
    }


}
newHome(["Dahlias","112","500"]);