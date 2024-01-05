function shoppingList (data){

    let list = data[0].split('!');
    let newList = [];

    for (let i = 1; i < data.length; i++){
        let currentItem = data[i].split(' ');
        let command = currentItem[0];
        let product = currentItem[1];
        let productIndex = list.indexOf(product);
        let newProduct = currentItem[2];
        if (command !== "Go"){
            if (command === "Correct" && list.includes(product)){
                list.splice(productIndex, 1, newProduct);
            }
            if (command === "Unnecessary" && list.includes(product)){
                list.splice(productIndex, 1);
            }
            if (command === "Urgent" && !list.includes(product)){
                list.unshift(product);
            }
            if (command === "Rearrange" && list.includes(product)){
                list.splice(productIndex, 1);
                list.push(product);
            }
        }
    }
    console.log(list.join(', '));

}
shoppingList(["Pepper!Grapes!Salt!Water!Banana!Milk",
"Urgent Milk",
"Rearrange Grapes",
"Correct Pepper Onion",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);
