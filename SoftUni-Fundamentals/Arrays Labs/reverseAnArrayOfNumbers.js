function reverseAnArrayOfNumbers(num, data){
let arr = [];
for (let i = 0; i < num; i++){
    arr.push(data[i]);
}
let output = "";
for (let i = arr.length - 1; i >= 0; i--){
    output += `${arr[i]} `;
    
}
console.log(output);

}
reverseAnArrayOfNumbers(3,[10, 20, 30, 40, 50]);