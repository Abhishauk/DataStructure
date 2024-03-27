// Define a Node class to represent each element in the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define a LinkedList class to represent the linked list
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a new element to the end of the linked list
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
      this.size++;
    }
  
    // Sort the linked list using bubble sort
    bubbleSort() {
      if (this.size < 2) {
        return;
      }
  
      let swapped;
      do {
        swapped = false;
        let current = this.head;
        let prev = null;
  
        while (current.next !== null) {
          if (current.value > current.next.value) {
            // Swap the values of the two nodes
            const temp = current.value;
            current.value = current.next.value;
            current.next.value = temp;
  
            // Set the swapped flag to true
            swapped = true;
          }
          prev = current;
          current = current.next;
        }
      } while (swapped);
    }
  
    // Print the linked list to the console
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  // Usage example
  const linkedList = new LinkedList();
  linkedList.add(5);
  linkedList.add(2);
  linkedList.add(8);
  linkedList.add(1);
  linkedList.add(3);
  
  console.log('Before sorting:');
  linkedList.print(); // Outputs: 5 2 8 1 3
  
  linkedList.bubbleSort();
  
  console.log('After sorting:');
  linkedList.print(); // Outputs: 1 2 3 5 8
  