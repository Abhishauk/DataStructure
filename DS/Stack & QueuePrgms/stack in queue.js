class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
        
    }
    push(value){
    const newnode =new node(value)
    if(this.top==null){
        this.top=newnode
      
    }
    else{
       newnode.next=this.top
       this.top=newnode
    }
    }
    display(){
     const A=new stack()   
    let current=this.top
    while(current!=null){
        console.log(current.value);
        A.push(current.value)
        current=current.next   
    
     }
     return A
    }    
 }
const a=new stack()
a.push(10)
a.push(20)
a.push(30)
// a.duplicateRemove()
queue=a.display()
console.log("........");
queue.display()
console.log(a);
// console.log(queue);
