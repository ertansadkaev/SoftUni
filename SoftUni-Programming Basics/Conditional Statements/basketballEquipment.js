function Djesi (input){

    let yearTax = Number(input [0]);
    let shoes = yearTax * 0.40;
    let shoesPrice = yearTax - shoes;
    let clothes = shoesPrice * 0.20;
    let clothesPrice = shoesPrice - clothes;
    let ball = clothesPrice / 4;
    let accsesoaries = ball / 5;

    let allTaxes = yearTax + shoesPrice + clothesPrice + ball + accsesoaries;
    console.log(allTaxes);
}
Djesi (["550"]);