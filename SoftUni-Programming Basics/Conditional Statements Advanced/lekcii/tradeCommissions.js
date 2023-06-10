function tradeCommissions(input){
    let cities = input[0];
    let city = cities=="Sofia"||cities=="Plovdiv"||cities=="Varna";
    let sales = Number(input[1]);
    let commission = 0;
    if (!city || sales < 0 ){
        console.log("error");
    } else if ((cities == "Sofia" && 0<= sales && sales <=500)||(cities == "Plovdiv" && 0<= sales && sales <=500)||(cities == "Varna" && 0<= sales && sales <=500)){
            switch(cities){
                case "Sofia":
                    commission = sales * 0.05;
                    break;
                case "Varna":
                    commission = sales * 0.045;
                    break;
                case "Plovdiv":
                    commission = sales * 0.055;
                    break;
            }
            console.log(commission.toFixed(2));
        } else if ((cities == "Sofia" && 500< sales && sales <=1000)||(cities == "Plovdiv" && 500< sales && sales <=1000)||(cities == "Varna" && 500< sales && sales <=1000)){
            switch(cities){
                case "Sofia":
                    commission = sales * 0.07;
                    break;
                case "Varna":
                    commission = sales * 0.075;
                    break;
                case "Plovdiv":
                    commission = sales * 0.08;
                    break;
            }
            console.log(commission.toFixed(2)); 
        } else if ((cities == "Sofia" && 1000< sales && sales <=10000)||(cities == "Plovdiv" && 1000< sales && sales <=10000)||(cities == "Varna" && 1000< sales && sales <=10000)){
            switch(cities){
                case "Sofia":
                    commission = sales * 0.08;
                    break;
                case "Varna":
                    commission = sales * 0.10;
                    break;
                case "Plovdiv":
                    commission = sales * 0.12;
                    break;
            }
            console.log(commission.toFixed(2)); 
        } else if ((cities == "Sofia" && sales > 10000)||(cities == "Plovdiv" && sales > 10000)||(cities == "Varna" && sales > 10000)){
            switch(cities){
                case "Sofia":
                    commission = sales * 0.12;
                    break;
                case "Varna":
                    commission = sales * 0.13;
                    break;
                case "Plovdiv":
                    commission = sales * 0.145;
                    break;
            }
            console.log(commission.toFixed(2)); 
        } 
}

tradeCommissions(["Sofia", "120"])