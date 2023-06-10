function invalidNumber(input){
    let a = Number(input[0]);
    let isValid = a >= 100 && a <= 200 || a == 0;
    if (!isValid){
        console.log("invalid");
    }

}
invalidNumber(["220"]);