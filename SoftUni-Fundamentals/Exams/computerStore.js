function store (arr){
    let clientType = arr.pop();
    let arrayLength = arr.length;
    totalPriceWithoutTaxes = 0;

    for (let i = 0; i < arr.length; i++){
        let currentPrice = Number(arr[i]);
        if (currentPrice < 0){
            console.log("Invalid price!");
        } else {
        totalPriceWithoutTaxes += currentPrice;
        }     
    }
    let totalPrice = totalPriceWithoutTaxes * 1.20;
    if (totalPrice > 0){

    if (clientType === "special"){
        totalPrice = totalPrice * 0.90;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`); 
    console.log(`Taxes: ${(totalPriceWithoutTaxes * 0.20).toFixed(2)}$`)
    console.log(`-----------`)
    console.log(`Total price: ${totalPrice.toFixed(2)}$`)
} else {
    console.log("Invalid order!");
}

}
store([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    ;
    