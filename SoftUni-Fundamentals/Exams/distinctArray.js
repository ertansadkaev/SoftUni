function distinctArray(arr){
  
  let newArr = [];

  for (numbers of arr){
    if (!newArr.includes(numbers)){
        newArr.push(numbers)
    }
  }
  console.log(newArr.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])