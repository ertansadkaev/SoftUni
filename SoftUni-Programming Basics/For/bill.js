function solve (input){
    let months = Number(input[0]);
    let totalElectricity = 0;
    let water = 20;
    let internet = 15;
    let totalWater = 0;
    let totalInternet = 0;
    let totalOther = 0;
    let precent = 0;
    
    for (let i = 1; i <= months; i++) {
      let electricity = Number(input[i]);
      totalElectricity += electricity;
      totalOther += (electricity + water + internet) * 0.20 + electricity + water + internet;
      totalInternet += internet;
      totalWater += water;
    }
    
    let average = (totalElectricity + totalWater + totalInternet + totalOther) / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
solve(["5","68.63","89.25","132.53","93.53","63.22"]);