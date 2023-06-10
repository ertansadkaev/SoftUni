function sumNumbers (input){
 let firstNum = Number(input[0]);
 let sum = 0;
 let index = 1;
 let num = Number(input[index]);
 index++;
 
 while (firstNum > sum){
    sum += num;
    

    num = Number(input[index]);
    index++;

 }
 console.log(sum);



}
sumNumbers(["100",
"10",
"20",
"30",
"40"]);