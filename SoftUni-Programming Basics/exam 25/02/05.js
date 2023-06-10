function christmas (input){
    let index = 0;
    let command = input[index];
    index++;
    let child = 0;
    let old = 0;
    let toy = 5;
    let cloth = 15;
    while (command !== "Christmas"){
        let peopleInRange = Number(command);
        if (peopleInRange <= 16){
            child++;
        } else {
            old++;
        }
        command = input[index];
        index++;
    }
    let childGifts = child * toy;
    let olderGifts = old * cloth;
    console.log(`Number of adults: ${old}`);
    console.log(`Number of kids: ${child}`);
    console.log(`Money for toys: ${childGifts}`);
    console.log(`Money for sweaters: ${olderGifts}`);



}
christmas(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"]);