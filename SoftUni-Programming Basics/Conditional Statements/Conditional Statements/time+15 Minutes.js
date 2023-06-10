function timePlusMinutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let time = hours * 60 + minutes + 15;
    
    let totalHours = Math.floor(time / 60);
    let totalMin = time % 60;
    if (totalHours > 23){
        totalHours = 0;
    } if (totalMin<10){
        console.log(`${totalHours}:0${totalMin}`);
    } else {
        console.log(`${totalHours}:${totalMin}`);
    }
    
}


timePlusMinutes(["23","59"]);