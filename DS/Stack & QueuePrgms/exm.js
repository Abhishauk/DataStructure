function st(string){
    let stack=[];
    let operators=["C","D","+"]
    for(i = 0;i<string.length;i++){
        if(operators.includes(string[i])){
            var a;
            var b;

            if(string[i] === "C"){
                b = stack.pop()
            }else if(string[i] === "D"){
                a = stack.pop()
                stack.push(a)
                stack.push(a * 2)
            }else if(string[i] === "+"){
                let  b = stack.pop()
                let a =stack.pop()
                stack.push(a)   
                stack.push(b)
                stack.push(a + b)
            }
        }else{
            stack.push((parseInt(string[i])));
        }
    }
    return stack;

}
console.log(st(["5","2","C","D","+"]));