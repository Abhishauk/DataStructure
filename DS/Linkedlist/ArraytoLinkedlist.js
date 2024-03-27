class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  class LinkedList {
    constructor(arr) {
      this.head = null;
      this.tail = null;
  
      for (let i = 0; i < arr.length; i++) {
        let node = new Node(arr[i]);
  
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          this.tail.next = node;
          this.tail = node;
        }
      }
    }
  }
  
  let arr = [10, 20, 30, 40, 50];
  let list = new LinkedList(arr);
  console.log(list);
  
