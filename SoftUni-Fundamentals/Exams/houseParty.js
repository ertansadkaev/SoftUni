function houseParty(arr){

    let guestList = [];
    for (person of arr){
        let details = person.split(' ');
        let name = details[0];
    if (details.includes(`not`)){
        if (guestList.includes(name)){
            guestList.pop(name);
        } else {
            console.log(`${name} is not in the list!`);
        }
    } else {
        if (guestList.includes(name)){
            console.log(`${name} is already in the list!`);
        } else {
            guestList.push(name);
        }
    }

    }
    console.log(guestList.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);
