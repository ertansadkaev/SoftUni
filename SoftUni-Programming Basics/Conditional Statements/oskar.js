function Oscar (input){

    let rent = input[0];

    let statues = rent - (rent *0.30);
    let catering = statues - (statues * 0.15);
    let music = catering - (catering * 0.50);
    let lastPrice = rent + statues + catering + music;

    console.log(lastPrice);

}

Oscar([3500]);