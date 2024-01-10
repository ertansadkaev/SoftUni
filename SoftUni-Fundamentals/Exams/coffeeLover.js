function coffeeLover (arr){

let coffeeList = arr.shift().split(' ');
let countOfCommands = arr.shift().split('').map(Number);

for (let i = 0; i < countOfCommands; i++){
    let commands = arr.shift().split(' ');
    let fistCommand = commands[0];
    let secondCommand = commands[1];
    let lastCommand = commands[2];
    
    switch(fistCommand){
        case "Include":
            coffeeList.push(secondCommand);
            break;
        case "Remove":
            if (coffeeList.length > lastCommand){
                if (secondCommand === "first"){
                    coffeeList.splice(0, lastCommand);
                } else if (secondCommand === "last"){
                    coffeeList.splice(coffeeList.length -1, lastCommand);
                }
            }
            break;
        case "Prefer":
            let firstIndexToMove = Number(commands[1]);
            let secondIndexToMove = Number(commands[2]);
            if (coffeeList.includes(coffeeList[firstIndexToMove]) && coffeeList.includes(coffeeList[secondIndexToMove])){
                let oldProduct = coffeeList[firstIndexToMove];
                coffeeList.splice(firstIndexToMove,1 , coffeeList[secondIndexToMove]);
                coffeeList.splice(secondIndexToMove,1 , oldProduct)
            
            }
            break;
        case "Reverse":
            coffeeList.reverse();
            break;
    } 
}
console.log(`Coffees:\n${coffeeList.join(' ')}`);

}
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee","5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"])