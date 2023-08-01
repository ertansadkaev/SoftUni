function addressBook(data){
    let book = {};

    for (let info of data){
        let [person, address] = info.split(':');
        book[person] = address;
    }
    let sortedArr = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [person, address] of sortedArr){
        console.log(`${person} -> ${address}`);
    }

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)