class linked{
    constructor(value){
        this.head={
        value:value,
        next:null,
        prev:null
        }
        this.tail=this.head
        this.length=1

    }
    append(value){
        let node={
            value:value,
            next:null,
            prev:null
        }
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
        this.length++

    }
    prepend(value){
        let node={
            value:value,
            next:null,
            prev:null
            
        }
        node.next=this.head
        this.head.prev=node
        this.head=node
        this.length++
    
    }
    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }
        let node={
            value:value,
            next:null,
            prev:null
        }
        let beforevalue=this.traverse(index-1)
        let store=beforevalue.next
        beforevalue.next=node
        node.prev=beforevalue
        node.next=store
        this.length++
    }
    traverse(index){
        let container=this.head
        let count=1
        while(count!==index){
            container=container.next
            count++
        }
        return container


    }
    remove(index){
        const leader=this.traverse(index-1)
        let unwantednode=leader.next
        leader.next=unwantednode.next
    }


    print(){
        const arr=[]
        let currentnode =this.head
        while(currentnode !== null){
            arr.push(currentnode.value)
            currentnode=currentnode.next
        }
        console.log(arr);
    }


}
const h=new linked(10)

h.append(20)
h.append(40)
// h.prepend(40)
h.insert(2,35)
// h.remove(3)
h.print()
console.log(h);