function phoneBook(data){
    let book = {};
    for (let info of data){
        let [name, phoneNumber] = info.split(' ');
        book[name] = phoneNumber;
    }
    for (let [name, number] of Object.entries(book)){
        console.log(`${name} -> ${number}`);
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);