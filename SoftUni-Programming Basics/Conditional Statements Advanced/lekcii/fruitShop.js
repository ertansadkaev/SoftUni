function fruitShop(input){
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let week = (day == "Monday" ||day == "Tuesday"||day == "Wednesday"||day == "Thuesday" ||day == "Friday");
    let weekend = (day == "Saturday" ||day == "Sunday");
    let products = (product =="banana"||product =="apple"||product =="orange"||product=="grapefruit"||product=="kiwi"||product=="pineapple"||product=="grapes");
    if (!products || !week && !weekend){
        console.log("error");
    } else if (week){
            
            switch(product){
            case "banana":
                price= 2.50;
                break;
            case "apple":
                price= 1.20;
                break;
            case "orange":
                price= 0.85;
                break;
            case "grapefruit":
                price= 1.45;
                break;
            case "kiwi":
                price= 2.70;
                break;
            case "pineapple":
                price= 5.50;
                break;
            case "grapes":
                price= 3.85;
                break;
        }
        let total = price * quantity;
        console.log(total.toFixed(2));
    } else if (weekend){
        
            switch(product){
            case "banana":
                price= 2.70;
                break;
            case "apple":
                price= 1.25;
                break;
            case "orange":
                price= 0.90;
                break;
            case "grapefruit":
                price= 1.60;
                break;
            case "kiwi":
                price= 3.00;
                break;
            case "pineapple":
                price= 5.60;
                break;
            case "grapes":
                price= 4.20;
                break;
        } 
        let total = price * quantity;
        console.log(total.toFixed(2))
    } 
        
}
fruitShop(["orange","Friday","2"])