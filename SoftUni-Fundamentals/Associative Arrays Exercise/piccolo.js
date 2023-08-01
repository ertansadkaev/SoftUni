function piccolo (input){

    let parking = [];

    for (let line of input){
        let [direction, carPlate] = line.split(', ');
        if (direction === 'IN' && !parking.includes(carPlate)){
            parking.push(carPlate);
        } else if (direction === 'OUT' && parking.includes(carPlate)){
            let index = parking.indexOf(carPlate);
            parking.splice(index, 1);
        }
    }
    let sortedParking = parking.sort((a,b) => a.localeCompare(b));
    
    if (parking.length === 0){
        console.log(`Parking Lot is Empty`);
    } else {
        console.log(sortedParking.join(`\n`));
    }

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);