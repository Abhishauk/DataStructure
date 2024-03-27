class linked{
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







    print(){
      
        let currentnode =this.head
        while(currentnode !== null){
            console.log(currentnode.value)
            currentnode=currentnode.next
        }
        }








    delete(){
        let firstnode=this.head
        while(firstnode!=null){

            let next=firstnode.next
            while(next!=null && firstnode.value==next.value) {
                next=next.next

            } 
            firstnode.next=next
            if(next==this.tail && firstnode.value==next.value){
                this.tail=firstnode
                this.tail.next=null
            }
            firstnode=next
        }
     
     }   

}
const k=new linked(5)
k.append(5)
k.append(5)
k.append(7)
k.append(8)
k.append(10)
// k.append(10)

// k.delete()
console.log(k);
k.print()