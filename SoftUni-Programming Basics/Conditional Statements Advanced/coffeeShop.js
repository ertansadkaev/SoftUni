function shop(input){
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    if (city == "Sofia"){
        switch(product){
            case "coffee":
                product = 0.50;
            break;
            case "water":
                product = 0.80;
            break;
            case "beer":
                product = 1.20;
            break;
            case "sweets":
                product = 1.45;
            break;
            case "peanuts":
                product = 1.60;
            break;
            let total = product*count;
            console.log(total);
            }
    }    if (city == "Plovdiv"){
        switch(product){
            case "coffee":
                product = 0.40;
            break;
            case "water":
                product = 0.70;
            break;
            case "beer":
                product = 1.15;
            break;
            case "sweets":
                product = 1.30;
            break;
            case "peanuts":
                product = 1.50;
            break;
            let total = product*count;
            console.log(total);
            }
    }   if (city == "Varna"){
        switch(product){
            case "coffee":
                product = 0.45;
            break;
            case "water":
                product = 0.70;
            break;
            case "beer":
                product = 1.10;
            break;
            case "sweets":
                product = 1.35;
            break;
            case "peanuts":
                product = 1.55;
            break;
            }
    }
            let total = product * count;
            console.log(total);

}
shop(["coffee", "Varna", "2"])