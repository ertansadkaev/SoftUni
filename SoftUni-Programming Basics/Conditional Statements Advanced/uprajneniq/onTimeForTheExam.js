function onTimeForTheExam(input){
        startHour = Number(input[0]);
        startMinute = Number(input[1]);
        arrivalHour = Number(input[2]);
        arrivalMinute = Number(input[3]);
     
        let totalTimeStart = (startHour * 60) + startMinute;
        let totalTimeArrive = (arrivalHour * 60) + arrivalMinute;
        let diff;
        let hour;
        let minute;
        if (totalTimeStart > totalTimeArrive){
            diff = totalTimeStart - totalTimeArrive;
            if (diff >= 1 && diff <=30){
                console.log(`On time`);
                console.log(`${diff} minutes before the start`);
            } if (diff <= 59 ){
                console.log(`Early`)
                console.log(`${diff} minutes before the start`);
            }
                 if (diff > 59){
                    console.log(`Early`);
                    let hour = Math.floor(diff / 60);
                    let minute = diff % 60;
                    if (minute < 10){
                        console.log(`${hour}:0${minute} hours before the start`);
                    } else {
                        console.log(`${hour}:${minute} hours before the start`);
                    }
                }
                
            
        } else if (totalTimeArrive > totalTimeStart){
            diff = totalTimeArrive - totalTimeStart;
            if (diff <= 59){
                console.log(`Late`);
                console.log(`${diff} minutes after the start`);
            }
                 if (diff > 59){
                    console.log(`Late`);
                    let hour = Math.floor(diff / 60);
                    let minute = diff % 60;
                    if (minute < 10){
                        console.log(`${hour}:0${minute} hours after the start`);
                    } else {
                        console.log(`${hour}:${minute} hours after the start`);
                    }
                }
                
            
        } else if (totalTimeArrive == totalTimeStart){
            console.log("On time");
        }
    }
onTimeForTheExam(["15","00","14","01"])