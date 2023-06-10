function operationsBetweenNumbers(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];
    let result = 0;
    let oddOreven = 0;

    if (n2 === 0 && symbol == "/" || n2 === 0 && symbol === "%"){
        console.log(`Cannot divide ${n1} by zero`)
    }  else if (symbol === '+'){
        result = n1 + n2;
        if (result % 2 == 0){
            oddOreven = "even";
        } else {
            oddOreven = "odd";
        }
        console.log(`${n1} + ${n2} = ${result} - ${oddOreven}`);
    } else if (symbol === '-'){
        result = n1 - n2;
        if (result % 2 == 0){
            oddOreven = "even";
        } else {
            oddOreven = "odd";
        }
        console.log(`${n1} - ${n2} = ${result} - ${oddOreven}`);
    } else if (symbol === '*'){
        result = n1 * n2;
        if (result % 2 == 0){
            oddOreven = "even";
        } else {
            oddOreven = "odd";
        }
        console.log(`${n1} * ${n2} = ${result} - ${oddOreven}`);
    } else if (symbol === '/'){
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
    } else if (symbol === '%'){
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`)
    }
}
operationsBetweenNumbers(["10", "1", "-"]);