function Ani (input){

    let pen = Number(input[0]* 5.80);
    let marker = Number(input[1]* 7.20);
    let preparations = Number(input[2]* 1.20);
    let precent = Number(input[3]/100);

    let prices = pen + marker + preparations;
    let expenses = prices -(prices * precent);

    console.log(expenses);

}

Ani (["2","3","4","25"]);