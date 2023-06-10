function title(input){
    let age = Number(input[0]);
    let gander = String (input[1]);
    if (gander == "m"){
      if (age >= 16){
        console.log("Mr.");
    } else {
        console.log("Master");
    }
}  

    if (gander == "f"){
      if (age >= 16){
        console.log("Ms.");
    } else {
        console.log("Miss");
    }
}
}
    
            

        


title(["14","m"]);