function printEvenNumbers(arr) {
    const hashTable = {};
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num % 2 === 0) {
        hashTable[num] = true;
      }
    }
  
    // for (const m in hashTable) {
    //   console.log(parseInt(m));
    // }
    console.log(hashTable);
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printEvenNumbers(arr);
  