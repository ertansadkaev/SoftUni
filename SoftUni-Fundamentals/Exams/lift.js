function lift (arr){
    let touristsCount = Number(arr.shift());
    let wagonsState = arr.shift();
    let newWagonState = [];
    let maxWagonSpace = 4;
    
        for (let i = 0; i <= wagonsState.length; i++){
            if (i % 2 === 0){
                let addPeople = 0;
            let currentSpace = Number(wagonsState[i]);
            if (currentSpace < maxWagonSpace && touristsCount >= maxWagonSpace){
                addPeople = maxWagonSpace - currentSpace;
            } else if (currentSpace >= touristsCount && touristsCount !== 0){
                addPeople = maxWagonSpace - currentSpace;
            } else if (touristsCount <= maxWagonSpace && touristsCount !== 0){
                addPeople += touristsCount;
            }
            let wagonWithTourist = currentSpace + addPeople;
            newWagonState.push(wagonWithTourist);
            touristsCount -= addPeople;
            }
    }
        if (touristsCount > 0){
            console.log(`There isn't enough space! ${touristsCount} people in a queue!`);
            console.log(newWagonState.join(" "));
        } else {
            console.log(`The lift has empty spots!`);
            console.log(newWagonState.join(" "));
        }
    
    }
lift(["100","0 0 0 0 0"]);