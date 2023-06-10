function clothes (input){

    let gradus = Number(input[0]);
    let time = input[1];
     

    switch (time){
        case 'Morning':
            if (gradus >=10 && gradus <= 18){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (gradus > 18 && gradus <= 24){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (gradus >= 25){
                outfit = "T-shirt";
                shoes = "Sandals";
            }
            break;       
        case 'Afternoon':
            if (gradus >=10 && gradus <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (gradus > 18 && gradus <= 24){
                outfit = "T-shirt";
                shoes = "Sandals";
            } else if (gradus >= 25){
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case 'Evening':
            if (gradus >=10 && gradus <= 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (gradus > 18 && gradus <= 24){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (gradus >= 25){
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
    }
    console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`)
}
clothes(["28", "Evening"]);