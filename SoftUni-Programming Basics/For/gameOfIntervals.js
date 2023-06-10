function gameOfIntervals (input){
    let steps = Number(input[0]);
    let sum = 0;
    let numsInRange9 = 0;
    let numsInRange19 = 0;
    let numsInRange29 = 0;
    let numsInRange39 = 0;
    let numsInRange50 = 0;
    let negativNum = 0;
    let points = 0;
    for (let index = 1; index <= steps; index++){
        let numbers = Number(input[index]);
        sum += numbers;
        if (numbers < 0){
            points = points / 2;
            negativNum++;
        } else if (numbers >= 0 && numbers <= 9){
            points += numbers * 0.20;
            numsInRange9++;
        } else if (numbers <= 19){
            points += numbers * 0.30;
            numsInRange19++;
        } else if (numbers <= 29){
            points += numbers * 0.40;
            numsInRange29++;
        } else if (numbers <= 39){
            points += 50;
            numsInRange39++;
        } else if (numbers <= 50){
            points += 100;
            numsInRange50++;
        } else if (numbers > 50){
            points = points / 2;
            negativNum++;
        }
    }
    let totalNumsInRange9 = (numsInRange9 / steps * 100).toFixed(2);
    let totalNumsInRange19 = (numsInRange19 / steps * 100).toFixed(2);
    let totalNumsInRange29 = (numsInRange29 / steps * 100).toFixed(2);
    let totalNumsInRange39 = (numsInRange39 / steps * 100).toFixed(2);
    let totalNumsInRange50 = (numsInRange50 / steps * 100).toFixed(2);
    let totalNegativNum = (negativNum / steps * 100).toFixed(2);

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${totalNumsInRange9}%`);
    console.log(`From 10 to 19: ${totalNumsInRange19}%`);
    console.log(`From 20 to 29: ${totalNumsInRange29}%`);
    console.log(`From 30 to 39: ${totalNumsInRange39}%`);
    console.log(`From 40 to 50: ${totalNumsInRange50}%`);
    console.log(`Invalid numbers: ${totalNegativNum}%`);

}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);