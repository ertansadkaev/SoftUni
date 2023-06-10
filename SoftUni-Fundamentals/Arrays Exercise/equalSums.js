function equalSums(arr){
    let rightNum = 0;
    let leftNum = 0;
    let isEqual = false;
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length; j++){
            if (j !== i){
                let num = Number(arr[j]);
                if (j < i){
                    leftNum += num;
                } else if (j > i){
                    rightNum += num;
                }
            }
            if (i === 0){
                leftNum = 0;
            } else if (i === arr.length - 1){
                rightNum = 0;
            }
        }
        if (leftNum === rightNum){
            console.log(i);
            isEqual = true;
        } else {
            leftNum = 0;
            rightNum = 0;
        }
    }
    if (!isEqual){
        console.log("no");
}
}
equalSums([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]
    );