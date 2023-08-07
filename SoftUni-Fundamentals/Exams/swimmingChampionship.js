function swimmingChampionship(input) {
        let daysCount = Number(input.shift());
        let neededPoints = Number(input.shift());
        let swimmersCount = Number(input.shift());
        let hotelRoomPricePerSwimmer = Number(input.shift());
        let paticipationFeePerSwimmer = Number(input.shift());
        let totalExpenses = 0;
        let expensesForHotel = 0;
        let totalPoints = 0;
        let daylyPoints = 0;
     
        totalExpenses = paticipationFeePerSwimmer * swimmersCount;
     
        expensesForHotel = daysCount * hotelRoomPricePerSwimmer * swimmersCount;
     
        totalExpenses += expensesForHotel;
     
     
        for (let i = 0; i < input.length; i++) {
            let earnedPoints = Number(input[i]);
            
            if (i > 0) {
                totalPoints += earnedPoints + daylyPoints * 0.05;
                daylyPoints = 0;
                 
            } else {
                totalPoints += earnedPoints;
            }
     
            daylyPoints += earnedPoints;
     
        }
     
        if (totalPoints >= neededPoints) {
            totalExpenses *= 0.75;
            console.log(`Money left to pay: ${totalExpenses.toFixed(2)} BGN.`);
            console.log('The championship was successful!');
        } else {
            totalExpenses *= 0.90;
            console.log(`Money left to pay: ${totalExpenses.toFixed(2)} BGN.`);
            console.log('The championship was not successful.');
        }
    }
swimmingChampionship((["2",
"600",
"3",
"100.8",
"50.5",
"100.68",
"80.1"])
)