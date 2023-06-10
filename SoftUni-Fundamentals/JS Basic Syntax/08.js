function numbers(num){
    let sum = 0;
    let currentNumber = 1;
    for (i = 0; i<num; i++){
        console.log(currentNumber);
        sum += currentNumber;
        currentNumber += 2;
    }
    console.log(`Sum: ${sum}`)
}
numbers(5);