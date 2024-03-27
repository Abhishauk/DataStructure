class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linked{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const node = new Node(value)
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    display(){
        let current = this.head;
        while(current!=null){
            console.log(current.value);
            current = current.next;
        }                                                                                  
    }
    
    insertionSort() {
      if (!this.head || !this.head.next) {
        return;
      }
      let current = this.head.next;
      while (current) {
        let innerCurrent = this.head;
        while (innerCurrent !== current && innerCurrent.value <= current.value) {
          innerCurrent = innerCurrent.next;
        }
  
        if (innerCurrent !== current) {
          let temp = current.value;
          while (innerCurrent !== current.next) {
            const nextTemp = innerCurrent.value;
            innerCurrent.value  = temp;
            temp = nextTemp;
            innerCurrent = innerCurrent.next;
           
          }
        } 
  
        current = current.next;
      }
  
    }
  }
  

let list = new linked(10)
list.append(20)
list.append(5)
list.append(15)
list.append(3)
// list.append(2)

list.display()
console.log(list);
list. insertionSort()
list.display()                                                                                                                                                                                                       

