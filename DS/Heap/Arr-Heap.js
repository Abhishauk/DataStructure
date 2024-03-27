class Heap{
    constructor(){
        this.heap =[];
    }
    _bubbleDown(parentIndex,n){
        let leftChildIndex =2*parentIndex+1;
        let rightChildIndex = 2*parentIndex+2;
        let min = parentIndex;
        if(leftChildIndex < n && this.heap[leftChildIndex] < this.heap[min]){
            min = leftChildIndex;
        }
        if(rightChildIndex < n && this.heap[rightChildIndex] < this.heap[min]){
            min = rightChildIndex;
        }
        if(min!=parentIndex){
            [this.heap[min],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[min]]
            this._bubbleDown(min,n)
        }

    }
    build(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
          this._bubbleDown(i,arr.length);
        }
      }
}
let k = new Heap()
k.build([12,18,6,3,7,10])
console.log(k);