class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}
class Queue{
    constructor(value){
        this.front={
            value:value,
            next:null
        }
        this.rear=this.front;
    }
    Enqueue(value){
        const newnode = new Node(value)
        this.rear.next=newnode;
        this.rear=newnode;

    }
    Dequeue(){
        this.front=this.front.next;
    }
    Display(){
        let current=this.front;
        while(current!==null){
            console.log(current.value);
            current=current.next;
        }
    }

}
let list=new Queue(10)
list.Enqueue(15)
list.Enqueue(20)
list.Enqueue(25)
list.Enqueue(30)
list.Dequeue()
list.Display()
console.log(list);