function histogram(input){
    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for(index = 1; index <= count; index++){
        let indexCount = input[index];
        if (indexCount < 200){
            p1++;
        } else if (indexCount <= 399){
            p2++;
        } else if (indexCount <= 599){
            p3++;
        } else if (indexCount <= 799){
            p4++;
        } else if (indexCount >= 800){
            p5++;
        }
    }
    p1 = p1 / count * 100;
    p2 = p2 / count * 100;
    p3 = p3 / count * 100;
    p4 = p4 / count * 100;
    p5 = p5 / count * 100;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);



}
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);