function rightPlace(string, char, replaceString){
    let rep = string.replace(`_`, char) === replaceString ? console.log("Matched") : console.log("Not Matched");
   

}
rightPlace('Str_ng','I','Strong');