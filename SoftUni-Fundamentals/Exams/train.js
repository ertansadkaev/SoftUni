function train (arr){

    let wagonStage = arr[0].split(' ').map(Number);
    let maxCapacity = Number(arr[1]);
    let wagonStateAfterAdding = [];
    
    for (let i = 2; i < arr.length; i++){
        let addCommand = arr[i].split(' ');
        if (addCommand.includes('Add')){
            wagonStage.push(Number(addCommand[1]));
        } else {
            let passangers = Number(addCommand[0]);
            
            for (let j = 0; j < wagonStage.length; j++){
                if (maxCapacity - wagonStage[j] >= passangers){
                    wagonStage[j] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagonStage.join(' '));

    

}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])