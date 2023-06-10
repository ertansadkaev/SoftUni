function lunchBreak(input){
    let name = String (input[0]);
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);
    let relax = breakLength / 4;
    let lunch = breakLength / 8;
    let leftTime = breakLength - relax - lunch;
    let diff =Math.abs (movieLength - leftTime);
    if (leftTime >= movieLength){
         console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`);
    }


}
lunchBreak(["Game of Thrones",

"60",

"96"]);