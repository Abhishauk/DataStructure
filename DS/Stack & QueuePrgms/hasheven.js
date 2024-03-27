function Array(arr){
  let hashTable = {};

  for(i=0;i<arr.length;i++){

    if(arr[i] % 2 == 0){
      hashTable[arr[i]]=true;
    }

  }
  // console.log(hashTable);
  for(const key in hashTable){
    console.log(parseInt(key));
  }


}
let arr=[10,13,4,17,18]
Array(arr)