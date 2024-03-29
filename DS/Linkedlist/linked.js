class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      const node = new Node(element);
  
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
  
      this.size++;
    }
  
    printList() {
      let current = this.head;
      let str = "";
      while (current) {
        str += current.data + " ";
        current = current.next;
      }
      console.log(str);
    }
  
    insertionSort() {
      let current = this.head;
      let sortedList = null;
  
      while (current) {
        let next = current.next;
        if (!sortedList || current.data <= sortedList.data) {
          current.next = sortedList;
          sortedList = current;
        } else {
          let search = sortedList;
          while (search.next && current.data > search.next.data) {
            search = search.next;
          }
          current.next = search.next;
          search.next = current;
        }
        current = next;
      }
  
      this.head = sortedList;
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.add(3);
  linkedList.add(1);
  linkedList.add(5);
  linkedList.add(2);
  
  console.log("Before Sorting:");
  linkedList.printList(); // 3 1 5 2
  
  linkedList.insertionSort();
  
  console.log("After Sorting:");
  linkedList.printList(); // 1 2 3 5
  