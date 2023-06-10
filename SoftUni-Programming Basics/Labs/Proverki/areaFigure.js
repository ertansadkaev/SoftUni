function areaFigure (input){
    let figure = input[0];
    let sum = 0;
if (figure == "square"){
    let a = Number(input[1]);
    sum = a * a;}
else if (figure == "rectangle"){
    let a = Number(input[1]);
    let b = Number(input[2]);
    sum = a * b;}
else if (figure == "triangle"){
    let a = Number(input[1]);
    let h = Number(input[2]);
    sum = (a * h)/2;}
else if (figure == "circle"){
    let r = Number(input[1]);
    sum = Math.PI * Math.pow(r, 2);}
    
    console.log(sum);
}
areaFigure (["triangle","4.5","20"])