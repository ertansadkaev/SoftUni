function logistics(input) {
    let weightCount = Number(input[0]);
    let minibus = 0;
    let truck = 0;
    let rail = 0;
    let sum = 0;
    for (let index = 1; index <= weightCount; index++) {
        let singleWeight = Number(input[index]);
        sum += singleWeight
        if (singleWeight <= 3) {
            minibus += singleWeight;
        } else if (singleWeight <= 11) {
            truck += singleWeight;
        } else {
            rail += singleWeight;
        }
    }
    let avrgWeight = ((minibus * 200 + truck * 175 + rail * 120) / sum).toFixed(2);
    let precentMinibus = minibus / sum * 100;
    let precentTruck = truck / sum * 100;
    let precentRail = rail / sum * 100;
    console.log(avrgWeight);
    console.log(`${precentMinibus.toFixed(2)}%`);
    console.log(`${precentTruck.toFixed(2)}%`);
    console.log(`${precentRail.toFixed(2)}%`);




}
logistics(["5", "2", "10", "11", "1","7"]);