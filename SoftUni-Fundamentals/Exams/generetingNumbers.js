function generatingNumber(input) {
 
    let numbers = input.shift().split(" ").map(Number);
    for (const line of input) {
        let [command, ...tokens] = line.split(' ');
        if (command !== 'END') {
            if (command === "add") {
                tokens.shift();
                tokens.shift();
                let numsToAdd = tokens.map(Number);
                numbers = numsToAdd.concat(numbers);
            } else if (command === 'remove' && tokens[0] === 'greater') {
                let value = Number(tokens[2]);
                numbers = numbers.filter(num => num <= value);
            } else if (command === 'replace') {
                let value = Number(tokens[0]);
                let replacement = Number(tokens[1]);
                let index = numbers.indexOf(value);
                if (index !== -1) {
                    numbers[index] = replacement;
                }
            } else if (command === 'remove' && tokens[0] === 'at') {
                let index = Number(tokens[3]);
                if (index >= 0 && index < numbers.length) {
                    numbers.splice(index, 1);
                }
            } else if (command === 'find') {
                if (tokens[0] === 'even') {
                    let evenNumbers = numbers.filter(num => num % 2 === 0);
                    console.log(evenNumbers.join(' '));
                } else if (tokens[0] === 'odd') {
                    let oddNumbers = numbers.filter(num => num % 2 !== 0);
                    console.log(oddNumbers.join(' '));
                }
            }
        }
    }
    console.log(numbers.join(', '));
}
generatingNumber(["1 2 3 10 10 6 4 10",
"replace 10 1",
"remove at index 0",
"add to start 4 2",
"END"]);