function swimmingRecord(input){

    let recordSeconds = Number(input[0]);
    let metres = Number(input[1]);
    let timeForMetre = Number(input[2]);
    let totalTime = metres * timeForMetre; 
    let latency = Math.floor (metres / 15);
    totalTime = totalTime + (latency * 12.5);
    
    
    if (totalTime < recordSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let fail = totalTime - recordSeconds;
        console.log(`No, he failed! He was ${fail.toFixed(2)} seconds slower.`);
    }


}
swimmingRecord(["55555.67","3017","5.03"]);