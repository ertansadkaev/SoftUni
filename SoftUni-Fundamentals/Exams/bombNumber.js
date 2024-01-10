function detonateSequence(sequence, bombInfo) {
    
    let bombNumber = Number(bombInfo[0]);
    let bombPower = Number(bombInfo[1]);

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === bombNumber) {
      let startIndex = Math.max(0, i - bombPower);
      let endIndex = Math.min(sequence.length - 1, i + bombPower);
      sequence.splice(startIndex, endIndex - startIndex + 1);
      i = 0;
    }
  }
  let sum = 0;
  sequence.forEach(element => {
    sum += element
  });
  console.log(sum);
}
detonateSequence([1, 2, 2, 4, 2, 2,
    2, 9],[4, 2]);