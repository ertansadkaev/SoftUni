function tenisRanklist(input){
    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let wins = 0;
    let points = 0;
    let startingPoints = startPoints;
    for( let index = 2; index < input.length; index++){
        let stage = input[index];
        switch(stage){
            case "W": 
            points += 2000; 
            wins++;
            break;
            case "F": points += 1200; break;
            case "SF": points += 720; break;
        }
    } 
    let avgPoints = points / tournaments;
    console.log(`Final points: ${points + startPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`)

}
tenisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);