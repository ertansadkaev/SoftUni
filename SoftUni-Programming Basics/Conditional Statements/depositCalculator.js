function Interest (InterestPrecent){

    let deposit = Number (InterestPrecent[0]);
    let depositlength = Number (InterestPrecent[1]);
    let PrecentPerYear = Number (InterestPrecent[2]);
    let LastPrice = deposit + depositlength * ((deposit * PrecentPerYear/100)/12);

    console.log(LastPrice);

}

Interest(["200", "3", "5.7"]);