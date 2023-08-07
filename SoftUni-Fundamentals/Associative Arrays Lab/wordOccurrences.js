function wordOccurrences(input){
    let counter = {};
    for (let word of input){
        if (counter.hasOwnProperty(word)){
            counter[word]++
        } else {
            counter[word] = 1;
        }
    }
    let sortedCounter = Object.entries(counter).sort((a,b) => b[1] - a[1]);
    for (let [word, count] of sortedCounter){
        console.log(`${word} -> ${count} times`);
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);