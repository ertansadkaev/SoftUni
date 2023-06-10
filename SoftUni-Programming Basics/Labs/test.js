function calculateFoodCost(numDogs, numCats) {
    const dogFoodCost = 2.50;
    const catFoodCost = 4;
  
    return (numDogs * dogFoodCost) + (numCats * catFoodCost);
  }
  
  const numDogs = 13;
  const numCats = 9;
  const totalCost = calculateFoodCost(numDogs, numCats);
  console.log(`The total cost of food is ${totalCost} lv.`);
  