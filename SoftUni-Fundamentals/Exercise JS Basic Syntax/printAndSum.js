function printAndSum (startNum, endNum){
    let sum = 0;
    let print = "";
    
    for (i = startNum; i <= endNum; i++){
        print +=  `${i} ` ;
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);