let arr=[2,3,9,4,2]
const a = new Set()
let arr1=[];
k=0;

for(i=0;i<arr.length;i++){
    if(a.has(arr[i])){
        arr1[k]=arr[i]
        k++;
        
    }else{
        a.add(arr[i])
    }

}
console.log(arr1);
for(i=0;i<arr1.length;i++){
    if(a.has(arr1[i])){
        a.delete(arr1[i])
    }
}
console.log(a);