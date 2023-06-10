function cleverLily(input){
    let LilysAge = Number(input[0]);
    let washMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savedMoney = 0;
    let toys = 0;
    let addMoney = 0;
    let stolenMoney = 0;


    for (i = 1; i <= LilysAge; i++){
        if (i % 2 === 0){
            addMoney += 10;
            savedMoney += addMoney;
            stolenMoney++;
        } else {
            toys++;
        }
    }
    let totalToysPrice = toys * toyPrice;
    let totalSavedMoney = totalToysPrice + savedMoney - stolenMoney;
    if (totalSavedMoney >= washMachine){
        diff = totalSavedMoney - washMachine;
        console.log(`Yes! ${diff.toFixed(2)}`);
    }  else {
        diff = washMachine - totalSavedMoney;
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["21",

"1570.98",

"3"]);