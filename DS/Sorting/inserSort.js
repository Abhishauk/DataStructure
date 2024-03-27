// insetionSort

let arr =[20,6,15,33,7,2]
function insetionSort(arr){

    for(i=1;i<arr.length;i++){
        let k=i;
        let j=i-1;
        while(j>=0 && arr[j] > arr[k]){
            let temp = arr[k]
            arr[k] = arr[j]
            arr[j] = temp
            k--;
            j--;

        }
       
    }
    return arr;


}
console.log(insetionSort(arr))



// [20,6,15,33,7,2]
// [6,20,15,33,7,2]
// [6,15,20,33,7,2]
// [6,7,15,20,33,2]
// [2,6,7,15,20,33]