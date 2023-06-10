function addAndSubtract(input){
        let arr = [];
        sum = 0;
        newSum = 0;
    for (let index = 0; index < input.length; index++){
        let currentNum = Number(input[index]);
        sum += currentNum;
        if (currentNum % 2 === 0){
            currentNum += index;
        } else {
            currentNum -= index;
        }
        newSum += currentNum;
        arr.push(currentNum);   
    }
    console.log(arr);
    console.log(sum);
    console.log(newSum);

}
addAndSubtract([5, 15, 23, 56, 35]);