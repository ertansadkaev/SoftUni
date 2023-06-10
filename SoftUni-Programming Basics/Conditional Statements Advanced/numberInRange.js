function rangeNum(input){

    let a = Number(input[0]);
    if ((-100 <= a && a <= 100) && (a!=0)){
        console.log("Yes");
    } else {
        console.log("No");
    }
}
rangeNum(["-100"]);