function backToPast(input){
    let inhMoney = Number(input[0]);
    let mustLiveTo = Number(input[1]);
    let spentMoney = 0;
    let ages = 18;
    let leftMoney = 0;
    for ( let index = 1800; index <= mustLiveTo; index++){
        if(index % 2 === 0){
            spentMoney += 12000;
            leftMoney = inhMoney - spentMoney;
            ages++;
        } else {
            spentMoney += 12000 + ages * 50;
            leftMoney = inhMoney - spentMoney;
            ages++;
         
        }
    }
    if (inhMoney >= spentMoney){
    console.log(`Yes! He will live a carefree life and will have ${leftMoney.toFixed(2)} dollars left.`);
    } else {
     diff = spentMoney - inhMoney;
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }


}
backToPast(["100000.15", "1808"])