let arr=[2,3,5,1,3]
element=3;
let large=0;
let array=[]
function array1(arr){
    for(i=0;i<arr.length;i++){
        if(large < arr[i]){
            large = arr[i]
        }

    }
    for(j=0;j<arr.length;j++){
        if(3+arr[j] >= large){

            array.push(true)

        }else {
            array.push(false)
        }
        
    }
    console.log(array);

}
array1(arr)
