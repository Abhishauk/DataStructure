let arr=[10,5,14,2]
function Selection(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }


}
Selection(arr)
console.log(arr);



// [10,5,14,2]
// [5,10,14,2]
// [2,10,14,5]
// [2,5,14,10]
// [2,5,10,14]