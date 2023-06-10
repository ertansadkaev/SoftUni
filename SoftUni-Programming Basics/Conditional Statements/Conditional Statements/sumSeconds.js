function sumSeconds (input){

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirthTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirthTime;

    let totalTimeMin = Math.floor(totalTime / 60);
    let totalTimeSec = totalTime % 60;
    
    if (totalTimeSec < 10){
        console.log(`${totalTimeMin}:0${totalTimeSec}`);
    } else {
        console.log(`${totalTimeMin}:${totalTimeSec}`);
    }
    

}
sumSeconds(["35","45","44"]);