function agencyProfit(input){
    let name = input[0];
    let ticketsForOld = Number(input[1]);
    let ticketsForChild = Number(input[2]);
    let priceOfTicket = Number(input[3]);
    let tax = Number(input[4]);
    let priceOfTicketChild = priceOfTicket - (priceOfTicket * 0.70);
    let totalOlderPrice = priceOfTicket + tax;
    let totalChildPrice = priceOfTicketChild + tax;
    let totalProfit = (ticketsForChild * totalChildPrice) + (ticketsForOld * totalOlderPrice);
    let profit = totalProfit * 0.20;
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);


    



}
agencyProfit(["WizzAir","15","5","120","40"])
