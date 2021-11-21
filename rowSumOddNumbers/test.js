function rowSumOddNumbers(n) {
	const numberToStart = (n * (n - 1)) + 1;
  let sumOfNumbers = numberToStart;
  for (let index = 0; index < n; index+= 1) {
    sumOfNumbers * (sumOfNumbers + 2);  
  }
  return sumOfNumbers;
}

console.log(rowSumOddNumbers(42));