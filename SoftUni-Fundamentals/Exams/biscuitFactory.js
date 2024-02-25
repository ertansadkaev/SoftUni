function biscuitFactory (arr){
    let biscuitsPerDay = Number(arr[0]);
    let workers = Number(arr[1]);
    let opponentFactoryProduction = Number(arr[2]);
    let sumOfBiscuits = 0;
    
    for (let currentDay = 1; currentDay <= 30; currentDay++){

        if (currentDay % 3 === 0){
            sumOfBiscuits += Math.floor(((biscuitsPerDay * workers) * 0.75));
        } else {
            sumOfBiscuits += Math.floor(biscuitsPerDay * workers);
        }
    }
    console.log(`You have produced ${sumOfBiscuits} biscuits for the past month.`);
    let percentage = 0
    if (sumOfBiscuits > opponentFactoryProduction){
        percentage = (sumOfBiscuits - opponentFactoryProduction) / opponentFactoryProduction * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else if (sumOfBiscuits < opponentFactoryProduction){
        percentage = (opponentFactoryProduction - sumOfBiscuits) / opponentFactoryProduction * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }

}
biscuitFactory(["163",
"16",
"67020"])



;