function storage(data){
    let mapStorage = new Map();
    
    for (let line of data){
        let product = line.split(' ')[0];
        let quantity = Number(line.split(' ')[1]);
        if (mapStorage.has(product)){
            let currQuantity = mapStorage.get(product);
            let newQuantity = currQuantity += quantity;
            mapStorage.set(product, newQuantity);
        } else {
        mapStorage.set(product, quantity);
        }
    }
    
    for (let [product, quantity] of mapStorage){
        console.log(`${product} -> ${quantity}`);
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])