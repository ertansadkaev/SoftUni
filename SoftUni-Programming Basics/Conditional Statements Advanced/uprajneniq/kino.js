function kino (input){
    let movie = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
    let income = 0;
switch(movie){
    case 'Premiere': income = row * column * 12;break;
    case 'Normal': income = row * column * 7.50;break;
    case 'Discount': income = row * column * 5;break;
}
    console.log(income.toFixed(2));
}
kino((["Premiere",

"10",

"12"]))