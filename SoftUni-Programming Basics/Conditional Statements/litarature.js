function Joro(input){

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = pages / pagesPerHour / days;

    console.log(hours);
}

Joro(["432 ","15 ","4"]);