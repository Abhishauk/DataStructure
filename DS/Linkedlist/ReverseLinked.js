class linked {
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
    }
    append(value){
        let node={
            value:value,
            next:null
        }
        this.tail.next=node
        this.tail=node
    }
    reverse() {
        let hai= this.head;
        let current = this.head;    
        let prev = null;
        let next = null;
        while (current) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.head = prev;
        this.tail=hai


      }
      deleteElement(){
        let currentnode=this
      }
      print(){
        const arr=[]
        let currentnode =this.head
        while(currentnode !== null){
            arr.push(currentnode.value)
            currentnode=currentnode.next
        }
        // return arr
        console.log(arr);
    }
    }


const k=new linked(10)
k.append(20)
k.append(30)
k.append(40)
k.reverse()
k.print()
console.log(k);