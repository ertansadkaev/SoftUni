function searchNumber (numbers, commands){

    let = takeCommand = Number(commands[0]);
    let = deleteCommand = Number(commands[1]);
    let = searchCommand = Number(commands[2]);
    occursTime = 0;

    let takenArrays = []

    for (let i = 0; i < takeCommand; i++){
        let currentNum = Number(numbers[i]);
        takenArrays.push(currentNum);
    }
    takenArrays.splice(0, deleteCommand);

    for (let j = 0; j < takenArrays.length; j++){
        currentSearch = Number(takenArrays[j]);
        if (takenArrays.includes(searchCommand) && searchCommand === currentSearch){
            occursTime++;
        }
    }
    console.log(`Number ${searchCommand} occurs ${occursTime} times.`);

    

}
searchNumber([5, 2, 3, 2, 1, 6],[5, 2, 3])