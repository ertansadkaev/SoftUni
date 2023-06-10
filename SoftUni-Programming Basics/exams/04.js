function balls(input){
    let count = Number(input[0]);
    let points = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let others = 0;
    let divided = 0;
    for (let i = 1; i <= count; i++){
        let colors = input[i];
        if (colors === "red"){
            points += 5;
            red ++;
        } else if (colors === "orange"){
            points += 10;
            orange ++;
        } else if (colors === "yellow"){
            points += 15;
            yellow ++;
        } else if (colors === "white"){
            points += 20;
            white ++;
        } else if (colors === "black"){
            points = Math.floor(points / 2);
            divided ++;
        } else {
            others++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${others}`);
    console.log(`Divides from black balls: ${divided}`);
    

}
balls(["3","white","black","pink"]);