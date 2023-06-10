function maxNumber (input){
    let result = '';

    for (let i = 0; i < input.length; i++){
        let isMax = true;
        let currentNum = Number(input[i]);
    
    for (let j = i; j < input.length; j++){
        let nextNum = Number(input[j + 1]);
        if (nextNum >= currentNum){
            isMax = false;
            break;
        }
    }
    if (isMax){
        result += `${currentNum} `;
    }
}
    console.log(result);
}
maxNumber([1, 4, 3, 2]);