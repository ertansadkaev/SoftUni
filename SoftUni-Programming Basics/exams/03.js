function aluminumJoinery(input){
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0;
    let deliveryPrice =0;
    if (delivery === "With delivery"){
        deliveryPrice = 60;
    }
    switch (type){
        case "90X130":
            price = count * 110;
            if (count > 60){
                price = price * 0.92;
            } else if (count > 30){
                price = price * 0.95;
            } break;
        case "100X150":
            price = count * 140;
            if (count > 80){
                price = price * 0.90;
            } else if (count > 40){
                price = price * 0.94;
            } break;
        case "130X180":
            price = count * 190;
            if (count > 50){
                price = price * 0.88;
            } else if (count > 20){
                price = price * 0.93;
            } break;
        case "200X300":
            price = count * 250;
            if (count > 50){
                price = price * 0.86;
            } else if (count > 25){
                price = price * 0.91;
            } break;
    }
        if (count > 10){
            let total = price + deliveryPrice;
            if (count > 99){
                total = total * 0.96;
            }
            console.log(`${total.toFixed(2)} BGN`);
        } else {
            console.log("Invalid order");
        }


}

aluminumJoinery(["5","100X150","With delivery"]);