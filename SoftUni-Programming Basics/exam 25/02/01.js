function solve(input){
    let countPaints=Number(input[0])
    let RollTapets=Number(input[1])
    let pricePerGloves=Number(input[2])
    let pricePerBrush=Number(input[3])
    let pricePerPaint=21.50
    let pricePerTapet=5.20
 
    let TotalpaintPrice=pricePerPaint*countPaints
    let totalTapetsPrice=pricePerTapet*RollTapets
    let neededGloves=Math.ceil(0.35*RollTapets)
    let neededBrushes=Math.floor(0.48*countPaints)
    let totalGlovePrice=neededGloves*pricePerGloves
    let totalBrushesPrice=neededBrushes*pricePerBrush
    
    let totalPriceOfProducts=TotalpaintPrice+totalTapetsPrice+totalGlovePrice+totalBrushesPrice
    let delivery=1/15*totalPriceOfProducts
    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
 
 
}
painting(["21","18","5","2.2"]);