function Graduate (input){

    let grade = Number (input[0]);
    let text = "Excellent";

    if (grade >= 5.50){
    console.log(text);
    }
    
    else {
    console.log("Not Excellent!");
}

}
Graduate(["6"]);