function wordTracker(input){
    let tracker = {};

    let wordsToCheck = input.shift().split(' ');
    for (let checkWord of wordsToCheck){
        tracker[checkWord] = 0;
        for (let word of input){
            if (checkWord === word){
                tracker[checkWord]++;
            }
        }
    }
    let sortedTracker = Object.entries(tracker).sort((a,b) => b[1] - a[1]);

    sortedTracker.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
    
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);