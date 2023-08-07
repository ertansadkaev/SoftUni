function stringManipulation(input){
    let string = input.shift();
 
    let command = input.shift();
 
    while(command != 'End'){
        let line = command.split(' ');
        let action = line.shift();
 
        switch(action){
            case'Translate':{
                let [char, replacement] = line;
                while(string.includes(char)){
                    string = string.replace(char,replacement);
                }
                console.log(string);
                break;
            }
            case'Includes':{
                let subStr = line.shift();
                if(string.includes(subStr)){
                    console.log('True');
                } else{
                    console.log('False');
                }
                break;
            }
            case'Start':{
                let startStr = line.shift();
                let startLength = startStr.length;
                let startOfStr = string.slice(0, startLength);
                if(startOfStr == startStr){
                    console.log('True');
                } else{
                    console.log('False');
                }
                break;
            }
            case'Lowercase':{
                string = string.toLowerCase();
                console.log(string);
                break;
            }
            case'FindIndex':{
                let char = line.shift();
                let lastIndex = string.lastIndexOf(char);
                console.log(lastIndex);
                break;
            }
            case'Remove':{
                let [startIndex, count] = line;
                count = Number(count);
                startIndex = Number(startIndex)
                let endIndex = startIndex + count
                let replaceStr = string.slice(startIndex, endIndex);
                string = string.replace(replaceStr, '');
                console.log(string); 
            }
        }
 
        command = input.shift();
    }
 
}
stringManipulation(["//Thi5 I5 MY 5trING!//", "Translate 5 s", "Includes string", "Start //This", "Lowercase", "FindIndex i", "Remove 0 10", "End"]);