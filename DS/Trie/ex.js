class Trie{
    constructor(){
        this.root = {}
    }
    add(word){
        let node = this.root
        for(let i = 0;i < word.length; i++){
            if(!node[word[i]]){
                node[word[i]] = {}
            }
            node = node[word[i]]
        }
        node.end = true;
    }
    search(word){
        let node =this.root;
        for(let i = 0; i <word.length; i++){
            if(!node[word[i]]){
                return false;
            }
            node = node[word[i]]
        }
        return true

    }

}
const k = new Trie()
k.add("ABHISHA")
k.add("ABHI")
console.log(k.search("ABH"));
console.log(k);