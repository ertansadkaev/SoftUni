function Lubo (input){

    let length = Number(input [0]);
    let width = Number(input [1]);
    let high = Number(input [2]);
    let precent = Number(input [3]);
    let sumAccuarium = length * width * high;
    let precentSum = precent * 0.01;
    let litres = sumAccuarium / 1000;
    let litresSum = litres * (1 - precentSum);

    console.log(litresSum);

}
Lubo(["85","75","47","17"]);