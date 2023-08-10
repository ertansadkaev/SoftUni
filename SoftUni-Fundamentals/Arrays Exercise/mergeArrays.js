function mergeArray(firstArr, secondArr){
        let newArr = [];

    for (let index = 0; index < firstArr.length; index++){
        if (index % 2 === 0){
            let sum = Number(firstArr[index]) + Number(secondArr[index]);
            newArr.push(sum);
        } else {
            let concatination = firstArr[index] + secondArr[index];
            newArr.push(concatination);
        }
    }
        console.log(newArr.join(' - '));
}
mergeArray(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])