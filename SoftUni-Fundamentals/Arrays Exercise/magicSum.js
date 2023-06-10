function magicSum(arr, givenNum){
    
    for(let i = 0; i < arr.length; i++){
        if (i !== 0){
            let currentNum = Number(arr[i-1])
        
        for (let j = i; j < arr.length; j++){
            let prevNum = Number(arr[j]);
            
            if (currentNum + prevNum === givenNum){
                console.log(`${currentNum} ${prevNum}`);
            }
        }
    }
    }
    
}
magicSum([1, 2, 3, 4, 5, 6],6);