function spaceship (input){
    let widgh = Number(input[0]);
    let length = Number(input[1]);
    let high = Number(input[2]);
    let avgHighofSpaceman = Number(input[3]);
    let spaceshipSize = widgh * length * high;
    let room = (avgHighofSpaceman + 0.40) * 2 * 2;
    let spaceInShip = Math.floor(spaceshipSize / room);
    if (spaceInShip < 3){
        console.log(`The spacecraft is too small.`);
    } else if (spaceInShip <= 10){
        console.log(`The spacecraft holds ${spaceInShip} astronauts.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }


}
spaceship(["4.5","4.8","5","1.75"]);