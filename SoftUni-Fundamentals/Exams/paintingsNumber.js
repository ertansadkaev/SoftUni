function paintingsNumber (input){
let numbers = input.shift().split(' ').map(Number);
for (let line of input){
    let [command, firstLine, secondLine] = line.split(' ');
    let value = Number(firstLine);
    let secondValue = Number(secondLine);
    if (command !== 'END'){
        if (command === 'Change' && numbers.includes(value)){
            let index = numbers.indexOf(value);
            if (index !== -1){
                numbers[index] = secondValue;
            }
        }
        if (command === 'Hide' && numbers.includes(value)){
            let index = numbers.indexOf(value);
            numbers.splice(index, 1);
        }
        if (command === 'Switch' && numbers.includes(value) && numbers.includes(secondValue)){
            let firstSwitch = numbers.indexOf(value);
            let secondSwitch = numbers.indexOf(secondValue);
            numbers.splice(firstSwitch, 1, secondValue);
            numbers.splice(secondSwitch, 1, value);
        }
        if (command === 'Insert' && numbers.length >= value){
            numbers.splice(value+1, 0, secondValue);
        }
        if (command === 'Reverse'){
            numbers.reverse();
        }
    }
}
console.log(numbers.join(' '));


}
paintingsNumber(["115 101 114 73 111 116 75",
"Insert 5 114",
"Switch 116 73",
"Hide 76",
"END"]);

