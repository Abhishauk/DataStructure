// BubbleSort

let arr = [10,5,8,11,3,2];
function BubbleSort(arr){                 
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            
        if(arr[j] > arr[j+1]){
            
            let temp =arr[j]
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
    
    }
    return arr
}
console.log(BubbleSort(arr));

// [10,5,8,11,3,2]
// [5,8,10,3,2,11]
// [5,8,3,2,10,11]
// [5,3,2,8,10,11]
// [3,2,5,8,10,11]
// [2,3,5,8,10,11]
