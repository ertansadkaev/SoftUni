function read(input){
    let index = 0;
    let text = input[index];
    index ++;
    while (text !== "Stop"){
        console.log(text);
        text = input[index]
        index++
    }

}
read(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);