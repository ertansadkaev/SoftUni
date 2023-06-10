function player (input){
    let bestPlayer = "";
    let maxGoals = 0;
    let hatTrick = false;
    
    for (let i = 0; i <= input.length; i++){
      let playerName = input[i];
      i++;
      let goals = Number (input[i]);

      if (goals > maxGoals) {
        maxGoals = goals;
        bestPlayer = playerName;
        hatTrick = goals >= 3;
      }
      if (goals >= 10) {
        break;
      }
    }
    
    console.log(`${bestPlayer} is the best player!`);
    if (hatTrick) {
      console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
      console.log(`He has scored ${maxGoals} goals.`);
    }

}
player(["Petrov",
"2",
"Drogba",
"11"])
;