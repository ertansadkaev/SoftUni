function arrayManipulator(numbers, commands){
    let commandsLength = commands.length;
    for (let i = 0; i < commandsLength; i++){
        let command = commands.shift().split(' ');
        let givenCommand = command.shift();
        let firstCommand = Number(command[0]);
        let secondCommad = Number(command[1]);
        switch (givenCommand){
            case "add":
            numbers.splice(firstCommand, 0, secondCommad)
                break;
            case "addMany":
                for (let i = 1; i < command.length; i++){
                    let currentNum = Number(command[i]);
                    numbers.splice(firstCommand, 0, currentNum);
                    firstCommand += 1;
                }
                break;
            case "contains":
                if (numbers.includes(firstCommand)){
                for (let k = 0; k < numbers.length; k++){
                    let indexOfNumber = numbers.indexOf(numbers[k]);
                    if (numbers.includes(firstCommand)){
                        console.log(indexOfNumber);
                        break;
                    }
                }
            } else {
                console.log(-1);
            }
                break;
            case "remove":
                numbers.splice(firstCommand, 1)
                break;
            case "shift":
                for (let s = 0; s < firstCommand; s++){
                    let temp = Number(numbers[0]);
                    numbers.shift();
                    numbers.push(temp);
                }
                break;
            case "sumPairs":
                for (let j =1; j<numbers.length; j++){
                    let prevNum = numbers[j -1];
                    let currentNum = numbers[j];
                    let sumOfNums = currentNum + prevNum; 1
                    numbers.splice(j-1 , 2, sumOfNums)
                }
                
                break;
            case "print":
                console.log(numbers);
                break;
        }
    }
    

}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"])