class Trie {
    constructor() {
      this.root = {};
    }
    add(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
          node[word[i]] = {};
        }
        node = node[word[i]];
       }
      node.end = true;
    }                   
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
          return false;
        }
        node = node[word[i]];                                                                                                     
      }
      return node.end === true;
    }
    startsWith(prefix) {
      let current = this.root;
      for (const char of prefix) {                
        if (!current[char]) {
          return false;
        }
        
        current = current[char];
      }
      return true;
    }
  }
  const trie = new Trie();
  
  trie.add("ABHISHA");
  trie.add("ABHI");
  trie.add("VYSHNA")
  console.log(trie);
   console.log(trie.search("ABHI")); 
  console.log(trie.startsWith("A"));
