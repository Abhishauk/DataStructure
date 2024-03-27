class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.length = size;

    }
    hash(key){
        let total=0;
        for(let i = 0;i<key.length;i++){
            total +=key.charCodeAt(i)

        }
        return total%this.length
    }
    set(key , value){
        const index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }else{
            
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0] == key){
                    this.table[index][i][1] = value
                    return;
                }
            }
        }
        this.table[index].push([key,value]);
        return;

    }
    get(key){
        const index = this.hash(key)
        let current = this.table[index]
        if(current){
            for(let i = 0;i<current.length;i++){
                if(current[i][0] == key){
                    return current[i][1];

                }
            }
        }else{
            return "not exist"
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
    remove(key){
        const index = this.hash(key)
        this.table[index]=undefined    
    }   
}
let h= new hashtable(50)
h.set("name","abhi")
h.set("age","10")
h.set("nema","sidhu")
// h.remove("age")
h.display()
// console.log(h.table);
// console.log(h.get("name"));