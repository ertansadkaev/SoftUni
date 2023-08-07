function sortArr (input){
    
    let sortedArr = input.sort((a,b) =>{
        if (a.length !== b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });
    console.log(sortedArr.join('\n'));

}
sortArr(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George']);