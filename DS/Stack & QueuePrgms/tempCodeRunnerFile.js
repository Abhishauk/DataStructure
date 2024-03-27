function Array(arr){
    let stack =[]
    for(i=0;i<arr.length;i++){
        stack.push(arr[i])
    }
    stack.pop()
    return stack;

}
let arr=[10,6,8,3,4]
console.log(Array(arr));