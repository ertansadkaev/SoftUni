function dayOfWeek (data){
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    
    if (data >= 1 && data <= 7){
        console.log(day[data - 1]);
    } else {
        console.log("Invalid day!");
    }
    
    }


dayOfWeek(8);