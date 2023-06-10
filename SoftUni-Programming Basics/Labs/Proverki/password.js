function Password (input){
    
    let writenPw = input[0];
    let correctPw = "s3cr3t!P@ssw0rd";
    if (correctPw == writenPw){
        console.log("Welcome");

    } else {
        console.log("Wrong password!");

    }
}
Password (["s3cr3t!P@ss0rd"])