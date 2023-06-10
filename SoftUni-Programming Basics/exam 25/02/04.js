function solve(input){
    let countCats=Number(input[0])
 
    let smallCats=0
    let bigCats=0
    let extraBig=0
    let totalGrams=0
    let pricePerDay=12.45
    
   
    for(let i=1; i<=countCats; i++){
        let foodQantity=Number(input[i]);
        totalGrams+=foodQantity
        
        if(foodQantity>=100 && foodQantity<200){
            smallCats++
            
 
        }else if(foodQantity>=200 && foodQantity<300){
            bigCats++
            
        }else if(foodQantity>=300 && foodQantity<400){
            extraBig++
        }
        
    }
    console.log(`Group 1: ${smallCats} cats.`)
    console.log(`Group 2: ${bigCats} cats.`)
    console.log(`Group 3: ${extraBig} cats.`)
    console.log(`Price for food per day: ${(totalGrams/1000*pricePerDay).toFixed(2)} lv.`)
    
    
}
solve(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])