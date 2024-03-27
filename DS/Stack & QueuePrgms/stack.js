
class Node{
    constructor(value){
        this.value=value;
        this.next=null;

    }
}
class stack{
    constructor(value){
        this.top={
            value:value,
            next:null
        }
        
        
    }
    push(value){
        const newnode=new Node(value)
        if(this.top==null){

            this.top=newnode;
        }else {
            
        newnode.next=this.top;
        this.top=newnode;
        }
    }
    pop(){
        if(this.top == null){  
            return;
       
        }
        this.top=this.top.next;

    }
    sort() {
        let current = this.top,
          A = null;
    
        while (current) {
          A = current.next;
          while (A) {
            if (current.value > A.value) {
              let temp = current.value;
              current.value = A.value;
              A.value = temp;
            }
           A = A.next;
          }
          current = current.next;
        }
      }
    display(){
        if(this.top == null){
            console.log("stack underflow");  
       
        }
        
        let current=this.top;
        while(current!=null){
            console.log(current.value);
            current=current.next
        }
    }
}
let list=new stack(10)
list.push(5)
list.push(3)
list.push(40)
list.push(15)
list.push(6)
list.sort()
list.pop()+
                             
list.display()
console.log(list);