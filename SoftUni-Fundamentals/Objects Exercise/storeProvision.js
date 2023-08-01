function storeProvision(stock, ordered){
    let stockProduct = {};
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        stockProduct[product] = quantity  
    }
    for (let j = 0; j < ordered.length; j += 2) {
        let product = ordered[j];
        let quantity = Number(ordered[j + 1]);
        if (stockProduct.hasOwnProperty(product)){
            stockProduct[product] += quantity;
        } else {
            stockProduct[product] = quantity;
        }
    }
    for (const key in stockProduct) {
        console.log(`${key} -> ${stockProduct[key]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);
