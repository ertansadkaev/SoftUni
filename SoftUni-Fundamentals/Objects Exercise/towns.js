function towns(array){
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        let [town, latitude, longitude] = array[index].split(' | ');
        obj.town = town;
        obj.latitude = Number(latitude).toFixed(2);
        obj.longitude = Number(longitude).toFixed(2);
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);