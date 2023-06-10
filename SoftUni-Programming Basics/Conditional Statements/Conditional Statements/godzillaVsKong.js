function godzillaVsKong(input){

    let budged = Number(input[0]);
    let statist = Number(input[1]);
    let clothPrice = Number(input[2]);
    let decor = budged * 0.10;
    
    if (statist >= 150){
        clothPrice = clothPrice * 0.90;
    }
    let statistsClothes = statist * clothPrice;
    let totalCost =  decor + statistsClothes;
    
    
    if (budged >= totalCost){
        let enough = Math.abs (budged-totalCost);
        console.log("Action!");
        console.log(`Wingard starts filming with ${enough.toFixed(2)} leva left.`);
    } else {
        let notEnough = Math.abs (totalCost-budged);
        console.log("Not enough money!");
        console.log(`Wingard needs ${notEnough.toFixed(2)} leva more.`);
    }

}
godzillaVsKong(["9587.88",

"222",

"55.68"]);