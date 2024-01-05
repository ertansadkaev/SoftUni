function sorting (input){
    
    let sortedArr = input.sort((a,b) => b - a).map(Number);
    let resultArr = [];

    for (let i = 0; i < input.length; i ++){
        let biggerNum =  sortedArr.shift();
        resultArr.push(biggerNum);
        let smallerNum = sortedArr.pop();
        resultArr.push(smallerNum);  
    }
    console.log(resultArr.join(' '));

}
sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);