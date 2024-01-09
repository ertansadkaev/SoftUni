function gladiatorInventory (arr){

    let invertory = arr.shift().split(' ');
    
    for (let i = 0; i < arr.length; i++){
        let currentArr = arr[i].split(' ');
        let command = currentArr[0];
        let item = currentArr[1];
        let currentItemIndex = invertory.indexOf(item);
        switch (command){
            case "Buy":
                if (!invertory.includes(item)){
                    invertory.push(item);
                }
                break;
            case "Trash":
                if (invertory.includes(item)){
                currentItemIndex = invertory.indexOf(item);
                invertory.splice(currentItemIndex, 1);
                    }
                break;
            case "Repair":
                if (invertory.includes(item)){
                currentItemIndex = invertory.indexOf(item);
                let temp = item;
                invertory.splice(currentItemIndex, 1);
                invertory.push(temp); 
            }
                break;
            case "Upgrade":
                let itemArr = item.split('-');
                let currentItem = itemArr[0];
                let upgradeItem = itemArr[1];
                currentItemIndex = invertory.indexOf(currentItem);
                if (invertory.includes(currentItem)){
                    let itemToBeAddded = `${currentItem}:${upgradeItem}`;
                    invertory.splice(currentItemIndex + 1, 0, itemToBeAddded); 
                }
                break;
        }
    }
    console.log(invertory.join(' '));

}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])