function meetings(data){
    let dailyMeetings = {};

    for (let line of data){
        let [day, name] = line.split(' ');
        if (dailyMeetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            dailyMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [day, person] of Object.entries(dailyMeetings)){
        console.log(`${day} -> ${person}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)