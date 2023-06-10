function commonElements(firstArr, secondArr){
    let arrayLength = firstArr.length;
    for(let i = 0; i < arrayLength; i++){
        let firstString = firstArr[i];
        
        for(let j = 0; j < arrayLength; j++){
            let secondString = secondArr[j];
            if (firstString === secondString){
                console.log(firstString);
            }
        }
    }

}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);