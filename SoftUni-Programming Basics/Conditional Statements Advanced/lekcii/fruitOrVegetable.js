function fruitOrVegetable(input){
    let type = String (input[0]);
   if (type == "banana"|| type == "apple"||type == "kiwi"||type == "cherry"||type == "lemon"||type == "grapes"){
    console.log("fruit");
   }
   else if (type == "tomato"||type == "cucumber"||type == "pepper"||type == "carrot"){
    console.log("vegetable");
   } else {
    console.log("unknown");
   }
    
                           
}
fruitOrVegetable(["adz"]);

