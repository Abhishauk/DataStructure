class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Linked{
    constructor(arr){
        this.head=null;
        this.tail=null;
        this.length=0

    for(let i=0;i<arr.length;i++){
        const newnode = new Node(arr[i])
        if(!this.head){
            this.head=newnode;
            this.tail=newnode;
        }else{
            this.tail.next=newnode;
            this.tail=newnode;
        }
        this.length++
    }

    }
    remove(){
        let element=this.traverse()
        element.next=null;
        this.tail=element
        this.length--
    }
   traverse(){
    let container=this.head;
    while(container.next!==this.tail){
        container=container.next
    }
    return container;

   }
   deletelement(element){
    let currentnode=this.head;
    if(this.head!=null && currentnode.value==element){
        this.head=currentnode.next;

    }else{
        while(currentnode!=null){
            if(currentnode.next.value==element){
            currentnode.next=currentnode.next.next;
            this.length--;

            break
            }else{
                currentnode=currentnode.next
            }
        }       
    }
 }
 print(){
    let currentnode=this.head;
    while(currentnode!==null){
      console.log(currentnode.value);
      currentnode=currentnode.next;
    }


  }



}
let arr=[10,20,30,40,50]
let k=new Linked(arr)
k.traverse()
// k.deletelement(10)
k.remove()
k.remove()
k.print()
console.log(k);