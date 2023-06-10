function ivancho (input){
    let age = 18;
    let inheritance = Number(input[0]);
    let year = Number(input[1]);
    
    let moneyLeft = inheritance;
    for (let y = 1800; y <= year; y++) {
      if (y % 2 === 0) {
        moneyLeft -= 12000;
      } else {
        moneyLeft -= 12000 + 50 * age;
      }
      age++;
    }
    
    if (moneyLeft >= 0) {
      console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
      console.log(`He will need ${(Math.abs(moneyLeft)).toFixed(2)} dollars to survive.`);

}
}
ivancho(["100000.15", "1808"]);