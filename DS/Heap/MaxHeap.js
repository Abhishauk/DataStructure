class Minheap{
    constructor(){
        this.heap = [];
    }
    insert(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor((currentIndex - 1) / 2);

        while(parentIndex >= 0 && this.heap[parentIndex] < this.heap[currentIndex]){
            [this.heap[parentIndex],this.heap[currentIndex]] = [this.heap[currentIndex],this.heap[parentIndex]]
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1)/2)
        }
    }
    remove(){
        if(this.heap.length == 0){
            return;
        }else if(this.heap.length == 1){
            return this.heap.pop()
        }else{
            let min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0,this.heap.length);
            return min;
        }
    }
    bubbleDown(parentIndex,n){
        let leftChildIndex = 2*parentIndex+1;
        let rightChildIndex = 2*parentIndex+2;

        let min = parentIndex
        if(leftChildIndex < n && this.heap[leftChildIndex] > this.heap[min]){
            min = leftChildIndex;

        }
        if(rightChildIndex < n && this.heap[rightChildIndex] > this.heap[min]){
            min = rightChildIndex;
        }
        if(min!=parentIndex){
            [this.heap[min],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[min]]
            this.bubbleDown(min,n)
        }
    }
    display(){
        console.log(this.heap);
    }
    heapsort(){
        for(let i=this.heap.length-1;i >=0;i--){
            [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]];
            this.bubbleDown(0,i)

        }
    }
}
const heap = new Minheap()
heap.insert(10)
heap.insert(49)
heap.insert(39)
// heap.insert(6)
// heap.insert(18)
// heap.insert(20)
// heap.remove()
console.log(heap);
heap.heapsort()
heap.display()