class Node{
    constructor(value){
      this.value=value
      this.next=null       
    }
}

   
class linked{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    append(value){
        const newnode=new Node(value)
        this.tail.next=newnode
        this.tail=newnode
        this.length++

    }
    prepend(value){
        const newnode=new Node(value)
        newnode.next=this.head
        this.head=newnode
        this.length++
    }
    shift(){
        
        this.head=this.head.next

    }
    
    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }

        const newnode=new Node(value)
        let beforevalue=this.traverse(index-1)
        let store=beforevalue.next
        beforevalue.next=newnode
        newnode.next=store

        this.length++

    }
    traverse(index){
        let container=this.head
        let count=1
        while(count!==index){
            container=container.next;
            count++;
        }
        return container

    }
    remove(index){
        const leader=this.traverse(index-1)
        console.log("l,l",leader);
        let unwantednode=leader.next
        leader.next=unwantednode.next
        this.length--;
    }      
    reverse() {
        let hai= this.head;
        let current = this.head;    
        let befor = null;
        let after = null;
        while (current) {
          after = current.next;
          current.next = befor;
          befor = current;
          current = after;
           
        }
        this.head = befor;
        this.tail=hai


      }
      sort() {
        let current = this.head,
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
      duplicateRemove(){
        let current=this.head;
        let obj={};

        obj[current.value]=true;
        while(current.next!==null){
            if(obj[current.next.value]){
                current.next=current.next.next;
                this.length--;
            } 
            else{
                obj[current.next.value]=true;
                current=current.next;
            }
        }
        // return this.print();
}
DeleteAfterD(){
    let currentnode=this.head;
    console.log(currentnode.value);
    while(currentnode!==null && currentnode.next!==null ){ 
     currentnode.next=currentnode.next.next
     currentnode=currentnode.next
     if(currentnode!==null){
     console.log(currentnode.value);
     this.tail=currentnode
     
     }
     this.length--
    }
}
middle() {
    let speed = this.head;
    let slow = this.head
    while(speed !==null && speed.next!==null) {
         slow = slow.next;
         speed = speed.next.next;

    }
    console.log("middle:",slow);
}
print(){
      
    let currentnode =this.head
    while(currentnode !== null){
        console.log(currentnode.value)
        currentnode=currentnode.next
    }
    }

}
const hy=new linked(70)
hy.append(5)
hy.append(15)
hy.append(30)
hy.append(40)
hy.append(33)
hy.append(10)

hy.remove(1)

// hy.prepend(40)

// hy.insert(5,15)
// hy.reverse()
// h.removeduplicate()
// hy.sort()
// hy.duplicateRemove()
hy.print()
// h.shift()
hy.middle()

// console.log(h)
// hy.DeleteAfterD()


console.log(hy);
