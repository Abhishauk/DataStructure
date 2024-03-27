class Node{
    constructor(value){
        this.value=value;
        this.next=null;

    }
}
class stack{
    constructor(){
        this.top=null; 

    }
    push(value){
        const newnode = new Node(value)
        if(!this.top){
            this.top=newnode;
        }else{
        newnode.next=this.top;
        this.top=newnode
        }
    }
    pop(){
        this.top=this.top.next

    }
    display(){
        let current =this.top
        while(current!=null){
            console.log(current.value);
            current=current.next
        }
    }
    String(){
        let String="";
        let current=this.top
        while(current){
            String+=current.value;
            current=current.next
        }
        console.log(String);
    }
}
let k = new stack()
k.push("A")
k.push("B")
k.push("H")
k.push("I")
k.String()
k.display()
console.log(k);
