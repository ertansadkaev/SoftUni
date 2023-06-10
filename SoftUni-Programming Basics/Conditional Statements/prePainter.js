function Rumen (input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumNylon = (nylon + 2) * 1.50;
    let sumPaint = (paint * 1.10) * 14.50;
    let sumThinner = thinner * 5.00;
    let bags = 0.40;
    let totalSumEquipment = sumNylon + sumPaint + sumThinner + bags;
    let totalSumBuilder = (totalSumEquipment * 0.30)* hours;
    let totalSum = totalSumBuilder + totalSumEquipment;
    

    console.log(totalSum);
}

Rumen(["10","11","4","8"]);