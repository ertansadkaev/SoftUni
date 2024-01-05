function reception (arr){

    let breakCounter = 1;
    let breakHours = 0;
    let totalHours = 1;
    let totalHoursWithBreak = 0;
    let students = arr.pop();
    let sumOfHelped = 0;
    
    while (sumOfHelped < students){

        for (let i = 0; i < arr.length; i++){
            let currentEmployee = Number(arr[i]);
            sumOfHelped += currentEmployee;
            if (sumOfHelped >= students){
            console.log(`Time needed: ${totalHours + breakHours}h.`);
            break;
            }
        }
        totalHours++;
        breakCounter++;
        if (breakCounter > 3){
            breakHours++;
            breakCounter = 1;    
        }
    }
}
reception(['3','2','5','40']);
